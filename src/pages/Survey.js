import React, { useCallback, useState } from 'react';
import FileSaver from "file-saver";
import { surveyInfo, question, questionType } from '../data/question'; 
import { answer } from '../data/answer';
import { PieChart, Pie, Legend, Tooltip, Cell,ResponsiveContainer } from 'recharts';
import Select from 'react-select'
import "./Survey.css"
import logo from "../assets/logo.png"
import { useCurrentPng } from 'recharts-to-png';
import { Link } from 'react-router-dom';
//Buraya yorumlu soru olduğunda hem seçmelileri hem de yorumları görebileceğimiz bir koşul eklenmeli
const Dashboard = () => {
    const [selectedSurvey, setSelectedSurvey] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [groupedAnswers, setGroupedAnswers] = useState(null);
    const [showSecondQuestionSelect, setShowSecondQuestionSelect] = useState(false);
    const [isAddQuestionButtonVisible, setIsAddQuestionButtonVisible] = useState(true);

const [groupedAnswersSecondQuestion, setGroupedAnswersSecondQuestion] = useState(null);

   const [selectedQuestionType, setSelectedQuestionType] = useState(null);
    const handleSurveySelect = (survey) => {
        setSelectedSurvey(survey);
        setSelectedQuestion(null);
        setSelectedResponse(null);
        setGroupedAnswers(null);
    };
    const [showSecondQuestionAnswers, setShowSecondQuestionAnswers] = useState(false);
    const [showSecondQuestionChart, setShowSecondQuestionChart] = useState(false);

    const handleQuestionSelect = (question) => {
        setSelectedQuestion(question);
    
        const questionTypeValue = questionType.find(qt => qt.QuestionTypeID === question.QuestionTypeID)?.QuestionType;

        console.log('Question Type:', questionTypeValue);
        const filteredAnswers = answer.filter(
            a => a.QuestionID === question.QuestionID &&
                 (questionTypeValue !== "Open" )
        );
    
        if (questionTypeValue !== "Open" ) {
            const grouped = {};
            filteredAnswers.forEach(a => {
                if (grouped[a.Answer]) {
                    grouped[a.Answer]++;
                } else {
                    grouped[a.Answer] = 1;
                }
            });
    
            const data = Object.keys(grouped).map(answer => ({
                answer,
                count: grouped[answer],
            }));
    
            setGroupedAnswers(data);
        } else {
            setGroupedAnswers(null);
        }
        setSelectedQuestionType(questionTypeValue);
        setSelectedResponse(null);
        
    };


const [selectedSecondQuestion, setSelectedSecondQuestion] = useState(null);

const handleSecondQuestionSelect = (question) => {
    setSelectedSecondQuestion(question);
 setIsAddQuestionButtonVisible(false);
    const questionTypeValue = questionType.find(qt => qt.QuestionTypeID === question.QuestionTypeID)?.QuestionType;

    const filteredAnswers = answer.filter(
        a => a.QuestionID === question.QuestionID &&
            (questionTypeValue !== "Open")
    );

    if (questionTypeValue !== "Open") {
        const grouped = {};
        filteredAnswers.forEach(a => {
            if (grouped[a.Answer]) {
                grouped[a.Answer]++;
            } else {
                grouped[a.Answer] = 1;
            }
        });

        const data = Object.keys(grouped).map(answer => ({
            answer,
            count: grouped[answer],
        }));

        setGroupedAnswersSecondQuestion(data); // ikinci soru için cevapları ayarla
        setShowSecondQuestionChart(true); // ikinci soru seçildiğinde grafikleri göster
    } else {
        setGroupedAnswersSecondQuestion(null);
    }

    setSelectedQuestionType(questionTypeValue);
    setSelectedResponse(null);
    setShowSecondQuestionAnswers(true);
};



const SecondQuestionAnswers = () => {
    const filteredAnswers = answer.filter(a => a.QuestionID === selectedSecondQuestion.QuestionID);

    return (
        <div className="second-question-answers">
           
            {/* <ul>
                {filteredAnswers.map(answer => (
                    <li key={answer.AnswerID}>{answer.Answer}</li>
                ))}
            </ul> */}
            <div className='chart-description'>
                {filteredAnswers && 
                    <p className='lengthofanswer'>
                        Total number of responses to this question is {filteredAnswers.length}
                    </p>
                }
            </div>
        </div>
    );
};


const SecondQuestionChart = () => {
    if (!groupedAnswersSecondQuestion) return null;

    return (
        <div className="graph">
        <button onClick={handleSecondQuestionPieDownload}>Download Chart</button>
       
            <ResponsiveContainer width={800} height={400}>
                <PieChart ref={secondPieRef}>
                    <Pie
                        dataKey="count"
                        data={groupedAnswersSecondQuestion}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label={renderPercentageLabel}
                        labelLine={false}
                    >
                        {groupedAnswersSecondQuestion.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div style={{ backgroundColor: '#fff', border: '1px solid #ccc',borderRadius: '10px', padding: '5px' , fontSize: 12}}>
                                        <p> {payload[0].payload.answer}</p>
                                        <p> {payload[0].value} kişi </p>
                                    </div>
                                );
                            }
                        }}
                    />
                    <Legend 
                        layout="horizontal" verticalAlign="bottom" align="center" 
                        formatter={(value, entry) => {
                            const { payload } = entry;
                            return (
                                <span style={{ color: payload.fill }}>
                                    {payload.answer} 
                                </span>
                            );
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
            
        </div>
    );
};


    const [getPiePng, { ref: pieRef }] = useCurrentPng();
     const handlePieDownload = useCallback(async () => {
        const png = await getPiePng();
        if (png) {
          FileSaver.saveAs(png, "pie-chart.png");
        }
      }, [getPiePng]);

      const [getSecondPiePng, { ref: secondPieRef }] = useCurrentPng();

      const handleSecondQuestionPieDownload = useCallback(async () => {
          const png = await getSecondPiePng();
          if (png) {
              FileSaver.saveAs(png, "second-pie-chart.png");
          }
      }, [getSecondPiePng]);
      
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    const RADIAN = Math.PI / 180;

    const renderPercentageLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="darkblue"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="middle"
                fontSize={14}
            >
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div className='container'>
            <div className='hello'>        
             <img
          src= {logo}
          className="website-logo"
          alt="website logo"
        />
                <h2 className='title'> Welcome to Uniqgene Survey Dashboard</h2>
            
                <h3 className='subtitle'> 🙋🏽‍♀️ You can start seeing the questions and responses by choosing the survey you want. 🧬</h3>
                <Link to="/surveylist">
      <button className="bounce">
        ALL SURVEY LIST
      </button>
    </Link>
            </div>

            <div className='surveyselect'>
    <h3 className='selecttitles'>Survey Name</h3>
    <Select 
        options={surveyInfo.map(survey => ({ value: survey, label: survey.Name }))}
        onChange={(selectedOption) => handleSurveySelect(selectedOption.value)} 
        value={selectedSurvey ? { value: selectedSurvey, label: selectedSurvey.Name} : null} 
        styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'black' : '#EEE2FC',
    }),
  }}
    />
   
</div>

            {selectedSurvey !== null && (
                <div className='surveyselect'>
                    <h3 className='selecttitles'>Questions of <a style={{color:"#7E00C2"}}> {selectedSurvey.Name}</a></h3> 
                    <Select 
        options={question
            .filter(q => q.SurveyID === selectedSurvey.SurveyID)
            .map(q => ({ value: q, label: q.QuestionText }))}
        onChange={(selectedOption) => handleQuestionSelect(selectedOption.value)} 
        value={selectedQuestion ? { value: selectedQuestion, label: selectedQuestion.QuestionText } : null} 
        styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'black' : '#EEE2FC',
    }),
  }}
    />
                </div>
            )}


            {selectedQuestion !== null && (
                <div className='allresponseframework'>
                    <div className='answerswithpieframework'>
                        <h3 className='selecttitles'> Responses of <a style={{color:"#7E00C2"}}> {selectedQuestion.QuestionText} </a></h3>
                        {groupedAnswers && (
                            <div className='graph'> 
                            <button  onClick={handlePieDownload}>Download Chart</button>
<ResponsiveContainer width={800} height={400} > 
                            <PieChart ref={pieRef} >
                                <Pie
                                    dataKey="count"
                                    data={groupedAnswers}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    fill="#8884d8"
                                    label={renderPercentageLabel} 
                                    labelLine={false}
                                   
                                >
                                    {groupedAnswers.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div style={{ backgroundColor: '#fff', border: '1px solid #ccc',borderRadius: '10px', padding: '5px' , fontSize: 12}}>
                                                    <p> {payload[0].payload.answer}</p>
                                                    <p> {payload[0].value} kişi </p>
                                                </div>
                                            );
                                        }
                                    }}
                                />
                                <Legend 
                              layout="horizontal" verticalAlign="bottom" align="center" 
                                    formatter={(value, entry) => {
                                        const { payload } = entry;
                                        return (
                                            <span style={{ color: payload.fill }}>
                                                {payload.answer} 
                                            </span>
                                        );
                                    }}
                                />
                            </PieChart>
                            </ResponsiveContainer>
                            </div>
                        )}

                        <div className='chart-description'>
                            {groupedAnswers && 
                                <p className='lengthofanswer'>
                                Total number of responses to this question is {groupedAnswers.reduce((acc, entry) => acc + entry.count, 0)}
                                </p>
                            }
                        </div>
                    </div>
                    
                    {(selectedQuestionType === "Open" ) && (
    <div className='answersopenframework'> 
        <ul className='listofopen'>
            {answer.filter(a => a.QuestionID === selectedQuestion.QuestionID).map((answer) => (
                <li className='liofopen' key={answer.AnswerID}>
                    {answer.Answer}
                </li>
            ))}
        </ul>
       
        <p className='lengthofanswer'> Total number of responses to this question is {answer.filter(a => a.QuestionID === selectedQuestion.QuestionID).length}</p>
    
    </div>
    
)}
{isAddQuestionButtonVisible && (
<button onClick={() => setShowSecondQuestionSelect(true)}>Add Question</button>
)}
    </div>
)}


{showSecondQuestionSelect && (
    <div className='surveyselect'>
        <h3 className='selecttitles'>Second Question</h3>
        <Select 
            options={question
                .filter(q => q.SurveyID === selectedSurvey.SurveyID)
                .map(q => ({ value: q, label: q.QuestionText }))}
            onChange={(selectedOption) => handleSecondQuestionSelect(selectedOption.value)} 
            value={selectedSecondQuestion ? { value: selectedSecondQuestion, label: selectedSecondQuestion.QuestionText } : null} 
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'black' : '#EEE2FC',
                }),
            }}
        />
    </div>
)}

{selectedSecondQuestion !== null && (
  <div className='allresponseframework'>
<div className='answerswithpieframework'>
<h3 className='selecttitles'> Responses of <a style={{color:"#7E00C2"}}> {selectedSecondQuestion.QuestionText} </a></h3>
                     
{showSecondQuestionChart && <SecondQuestionChart />}

{showSecondQuestionAnswers && <SecondQuestionAnswers />}
</div>   
        </div>
)}
        
        </div>
        
    );
};

export default Dashboard;
