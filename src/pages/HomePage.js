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


const HomePage = () => {

  const [showDiv, setShowDiv] = useState(false);
  const [surveykind, setSurveykind] = useState('');


  const handleChange = (event) => {
    setSurveykind(event.target.value);
  };

  const [totalResponse, setTotalResponse] = useState(0);

    //  toplam yanıt sayısını güncelle
    const handleDropdownChange = (event) => {
      handleChange(event);
      setSurveykind(event.target.value);
  
      // Simüle edilen toplam yanıt sayısını güncelle
      // Burada, gerçek verilere bağlı olarak toplam yanıt sayısını güncelleyebilirsiniz.
      // Örnek olarak, 10 olarak varsayalım:
      setTotalResponse(10);
    };
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
     buttonhere
     </div>
     </div>
       }

    </div>
  )
}

export default HomePage
