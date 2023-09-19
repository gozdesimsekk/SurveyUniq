// src/components/QuestionList.js
import React from 'react';
import { question } from '../data/questionModel';

const QuestionList = ({ surveyID }) => {
  const questions = question.filter(q => q.SurveyID === surveyID);

  return (
    <div>
      <h3>Questions</h3>
      <ul>
        {questions.map(q => (
          <li key={q.QuestionID}>
            {q.QuestionText}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
