import React, { useState } from 'react';
import { surveyInfo, question, questionType } from '../data/question'; 
import { answer } from '../data/answer';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import Select from 'react-select'
import "./Survey.css"

const Dashboard = () => {
    const [selectedSurvey, setSelectedSurvey] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [selectedResponse, setSelectedResponse] = useState(null);
    const [groupedAnswers, setGroupedAnswers] = useState(null);
   const [selectedQuestionType, setSelectedQuestionType] = useState(null);
    const handleSurveySelect = (survey) => {
        setSelectedSurvey(survey);
        setSelectedQuestion(null);
        setSelectedResponse(null);
        setGroupedAnswers(null);
    };

    const handleQuestionSelect = (question) => {
        setSelectedQuestion(question);
    
        const questionTypeValue = questionType.find(qt => qt.QuestionTypeID === question.QuestionTypeID)?.QuestionType;

        console.log('Question Type:', questionTypeValue);
        const filteredAnswers = answer.filter(
            a => a.QuestionID === question.QuestionID &&
                 (questionTypeValue !== "Open" && questionTypeValue !== "Short answer")
        );
    
        if (questionTypeValue !== "Open" && questionTypeValue !== "Short answer") {
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
    
  

    const handleResponseSelect = (response) => {
        setSelectedResponse(response);
    };

    const handleBackButtonClick = () => {
        setSelectedQuestion(null);
        setSelectedResponse(null);
        setGroupedAnswers(null);
    };

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
                fontSize={12}
            >
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className='hello'> 
                <h2 className='title'> Welcome to Survey Dashboard</h2>
            </div>

            <div className='surveyselect' style={{width: "500px"}}>
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
                <div className='surveyselect' style={{width: "500px"}}>
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
                            <PieChart width={500} height={400}>
                                <Pie
                                    dataKey="count"
                                    data={groupedAnswers}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
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
                                                <div style={{ backgroundColor: '#fff', border: '1px solid #ccc',borderRadius: '10px', padding: '5px' , fontSize: 14}}>
                                                    <p> {payload[0].payload.answer}</p>
                                                    <p> {payload[0].value} kişi </p>
                                                </div>
                                            );
                                        }
                                    }}
                                />
                                <Legend 
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
                        )}

                        <div style={{ marginLeft: '20px' }}>
                            {groupedAnswers && 
                                <p>
                                    Toplam Cevap Sayısı: {groupedAnswers.reduce((acc, entry) => acc + entry.count, 0)}
                                </p>
                            }
                        </div>
                    </div>
                    
                    {(selectedQuestionType === "Open" || selectedQuestionType === "Short answer") && (
    <div className='answersopenframework'> 
        <ul>
            {answer.filter(a => a.QuestionID === selectedQuestion.QuestionID).map((answer) => (
                <li key={answer.AnswerID}>
                    {answer.Answer}
                </li>
            ))}
        </ul>
    </div>
)}

    </div>
)}

        
        </div>
    );
};

export default Dashboard;
