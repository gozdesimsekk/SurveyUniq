// src/components/SurveyList.js
import React, { useState } from 'react';
import { surveyInfo } from "../data/questionModel"
import SurveyDetails from './SurveyDetails';

const SurveyList = () => {
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  const handleSelectSurvey = (survey) => {
    setSelectedSurvey(survey);
  };

  return (
    <div>
      <h2>Survey List</h2>
      <ul>
        {surveyInfo.map(survey => (
          <li key={survey.SurveyID} onClick={() => handleSelectSurvey(survey)}>
            {survey.Name}
            
          </li>
        ))}
      </ul>
      {selectedSurvey && <SurveyDetails survey={selectedSurvey} />}
    </div>
  );
};

export default SurveyList;
