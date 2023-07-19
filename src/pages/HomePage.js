import React from 'react'
import "./HomePage.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const HomePage = () => {
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

       <div className='surveytypeandresponse'> 
     <div className='dropsurvey'> 
     dropdownhere
     </div>
     <div className='seetheresult'> 
     buttonhere
     </div>
     </div>

    </div>
  )
}

export default HomePage
