// src/components/SurveyDetails.js
import React from 'react';

const SurveyDetails = ({ survey }) => {
  return (
    <div>
      <h2>{survey.Name}</h2>
      <p>{survey.Description}</p>
      {/* Add more details if needed */}
    </div>
  );
};

export default SurveyDetails;
