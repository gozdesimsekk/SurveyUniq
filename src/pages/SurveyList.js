import React from 'react'
import "./SurveyList.css"
import {BsFillCheckCircleFill, BsHourglassSplit } from 'react-icons/bs';
import {RxPaperPlane} from 'react-icons/rx';
import {IoMdCloseCircle} from 'react-icons/io';


import { IconContext } from "react-icons";
import { surveyInfo, surveyStatus } from '../data/question'; 


const formatDateString = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
const SurveyList = () => {
    return (
        <div className='container'>
         <h2 className='title'> All Surveys & Details</h2>
         <div className='divforicon'> 
         <div className='textinfoicon'>
         <IconContext.Provider value={{ color: "red",size: "22px"}}> 
         <IoMdCloseCircle style={{paddingRight: "10px"}}/>
         </IconContext.Provider>
         <p> Closed</p>
       
            </div>
            <div className='textinfoicon'>
            <IconContext.Provider value={{ color: "green",size: "20px"}}>
            <BsFillCheckCircleFill style={{paddingRight: "10px"}}/>
            </IconContext.Provider>
         <p> Open</p>
            </div>
            <div className='textinfoicon'>
            <IconContext.Provider value={{ color: "blue", size: "20px"}}>
 <BsHourglassSplit style={{paddingRight: "10px"}}/>
 </IconContext.Provider>
         <p> Suspended</p>
           </div>
           <div className='textinfoicon'>
           <IconContext.Provider  value={{ color: "grey", size: "20px"}}>
           <RxPaperPlane style={{paddingRight: "10px"}}/>
           </IconContext.Provider>
         <p> Planned</p>
           </div>
            </div>
        <div className='faq'>
          {surveyInfo.map((survey) => {
            const status = surveyStatus.find(item => item.SurveyStatusID === survey.SurveyStatusID);
              let icon;
        if (status && status.SurveyStatus === 'Open') {
          icon = (
            <IconContext.Provider value={{ color: "green",size: "20px"}}>
            <BsFillCheckCircleFill style={{paddingRight: "10px"}}/>
            </IconContext.Provider>
          );
        } else if (status && status.SurveyStatus === 'Closed') {
          icon = (
            <IconContext.Provider value={{ color: "red", size: "22px"}}> 
         <IoMdCloseCircle style={{paddingRight: "10px"}}/>
         </IconContext.Provider>
          );
        }
        else if (status && status.SurveyStatus === 'Planned') {
          icon = (
            <IconContext.Provider  value={{ color: "grey", size: "20px"}}>
           <RxPaperPlane style={{paddingRight: "10px"}}/>
           </IconContext.Provider>
          );
        }
        else if (status && status.SurveyStatus === 'Suspended') {
          icon = (
            <IconContext.Provider value={{ color: "blue", size: "20px"}}>
 <BsHourglassSplit style={{paddingRight: "10px"}}/>
 </IconContext.Provider>
          );
        }

      
            return (
              <div className='divfordetails'
              key={survey.SurveyID}>
                <input id={`faq-${survey.SurveyID}`} type='checkbox' />
                <label htmlFor={`faq-${survey.SurveyID}`}>
                
                  <p className="faq-heading">{survey.Name} {icon}</p>
                  
                  <div className='faq-arrow'> </div>
                  <p className="faq-text">{survey.Description}</p>
    
                  {/* Display additional survey information */}
                  <div className="survey-details">
                    <p className='subdesc'><strong>Start Date:</strong> {formatDateString(survey.StartDate)}</p>
                    <p className='subdesc'><strong>End Date:</strong> {formatDateString(survey.EndDate)}</p>
                    <p className='subdesc'><strong>Min Responses:</strong> {survey.MinResponses}</p>
                    <p className='subdesc'><strong>Max Responses:</strong> {survey.MaxResponses}</p>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
        </div>
      )
    }
  
  export default SurveyList