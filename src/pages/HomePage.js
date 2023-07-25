import React, { useState } from 'react';
import "./HomePage.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import mockdata from "../mockup/mockup"
const HomePage = () => {

  const [showDiv, setShowDiv] = useState(false);
  const [showDivques, setShowDivques] = useState(false);
  const [surveykind, setSurveykind] = useState('');
  const [question, setQuestion] = useState('');
 
  const handleChange = (event) => {
    setSurveykind(event.target.value);
  };

  const [totalResponse, setTotalResponse] = useState(0);

    //  toplam yanıt sayısını güncelle
    const handleDropdownChange = (event) => {
      handleChange(event);
      setSurveykind(event.target.value);
  
      setTotalResponse(10);
    };

    const handleDropdownQues = (event) => {
      
      setSelectedQuestion(event.target.value);
  
     
    };

    const [selectedQuestion, setSelectedQuestion] = useState(''); // Başlangıçta seçili öğe yok

    const handleButtonClick = () => {
     setShowDivques(true)
    };

    const questionMapping = [
      { key: 'testExperience', question: 'Uniqgene test kitini deneyimleyip, kişiselleştirilmiş raporunuzu okuduktan sonraki memnuniyetinizi derecelendirebilir misiniz?' },
      { key: 'interpretationExperience', question: 'Rapor yorumlama görüşmesinden memnun kaldınız mı? Lütfen derecelendirin!' },
      { key: 'graph', question: 'Raporunuzdaki görebileceğiniz aşağıdaki grafiklerden hangisi size daha faydalı oldu?' },
      { key: 'training', question: 'Raporunuzun 7. ve 8. sayfalarında bulunan antrenman önerilerinin spor yaparken faydalı olacağını düşünüyor musunuz?' },
      { key: 'parameterPower', question: 'Hangi genetik parametre ile ilgili sonuçları beğendiniz?' },
      { key: 'parameterOxygen', question: 'Hangi genetik parametre ile ilgili sonuçları beğendiniz?' },
      { key: 'parameterInjury', question: 'Hangi genetik parametre ile ilgili sonuçları beğendiniz?' },
      { key: 'parameterMotor', question: 'Hangi genetik parametre ile ilgili sonuçları beğendiniz?' },
      { key: 'advice', question: 'Uniqgene\'i çevrenize tavsiye eder misiniz?' },
    ];
  return (
    <div>
<div>
  navbar
</div>
      <div className='welcomediv'> 
      <div className='welcometitle'> 
      <h1 className='welcometo'> Welcome to </h1>
      </div>
      <div className='welcomenext'>  
      <h1  className='surveydashtitle'> UNIQGENE SURVEY DASHBOARD </h1>
      </div>
      <div className='explaination'> 
      <h4 className='firstselect'> First, select the location, then the survey you want to see the results of, and then select the questions from the questions section to see the statistics results. 
 Enjoy your work 🧬</h4>
      </div>
      </div>

      <div className='surveylocalization'>
      <div className='pickthelocal'>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Survey location</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={() => setShowDiv(true)} 
      >
        <FormControlLabel value="tr" control={<Radio />} label="TR" />
        <FormControlLabel value="eng" control={<Radio />} label="ENG" />
        <FormControlLabel value="all" control={<Radio />} label="ALL" />
      </RadioGroup>
    </FormControl>
    
      </div>
     <div className='lastupdate'>
      Last update date: 
     </div>
       </div>

       {showDiv && 
       <div className='surveytypeandresponse'> 
     <div className='dropsurvey'> 
     <Box sx={{ minWidth: 250 ,backgroundImage: "linear-gradient(45deg, rgba(237, 247, 255, 1)  0%,rgba(39, 53, 179, 1)  100%)", borderRadius: "8px"}}>
     <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Survey</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={surveykind}
    label="Survey Kind"
    onChange={handleDropdownChange}
  >
  {/* Bu kısımda menuitemlere  reportlar maplenecek */}
    <MenuItem value="reportsurvey">Report Survey</MenuItem>
    <MenuItem value="nutritionsurvey">Nutrition Survey</MenuItem>
 
  </Select>
</FormControl>
 </Box>
 {totalResponse > 0 && (
 <Box mt={0} border={1} borderRadius={2} borderTop={0} fontSize={20} color={"#273DB3"} p={2}>  {totalResponse} Total Response</Box> )}
     </div>
     <div className='seetheresult'> 
     <Button variant="contained" color="primary" size="large" onClick={handleButtonClick}>
     See The Answers Of This Survey
            </Button>
     </div>
     </div>
       }
       {showDivques && 
<div className='questions and answers'>
<div className='questions'>
<h4> Questions</h4>
<Box sx={{ maxWidth: 500 ,backgroundImage: "linear-gradient(45deg, rgba(237, 247, 255, 1)  0%,rgba(39, 53, 179, 1)  100%)", borderRadius: "8px"}}>
     <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select the question</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedQuestion} 
    onChange={handleDropdownQues}
  >
{questionMapping.map(({ key, question }) => (
              <MenuItem key={key} value={key}>{question}</MenuItem>
            ))}
 
  </Select>
</FormControl>
 </Box>
 <div className='ssss' style={{ display: "flex",flexDirection:"column", justifyContent: "center", alignItems: "center",padding: "10px",marginTop:"40px", backgroundImage: "url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg')" }}> 
<h4 className='selectedque'> Seçili Soru</h4>
 {selectedQuestion && <p className='questionexp'> {questionMapping.find(item => item.key === selectedQuestion)?.question}</p>} 
 
 </div>
</div>
<div className='answers'> 
<h4> Answers</h4>
</div>

</div>
 }
    </div>
  )
}

export default HomePage
