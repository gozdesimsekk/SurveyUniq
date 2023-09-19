// Örnek gerçekçi tarih oluşturucu fonksiyon
const generateRandomDate = () => {
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    const second = Math.floor(Math.random() * 60);

    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
};

// Örnek verilerle doldurulmuş modeller
export const surveyStatus = [
    {
        "SurveyStatusID": 1,
        "SurveyStatus": "Open"
    },
    {
        "SurveyStatusID": 2,
        "SurveyStatus": "Closed"
    },
    {
        "SurveyStatusID": 3,
        "SurveyStatus": "Planned"
    },
    {
        "SurveyStatusID": 4,
        "SurveyStatus": "Suspended"
    },
    {
        "SurveyStatusID": 5,
        "SurveyStatus": "In Progress"
    },
    {
        "SurveyStatusID": 6,
        "SurveyStatus": "Completed"
    }

];

export const surveyInfo = [
    {
        "SurveyID": 1,
        "SurveyStatusID": 1,
        "Name": "Nutrition Demand Survey",
        "Description": "Collecting demand to nutrition package",
        "StartDate": generateRandomDate(),
        "EndDate": generateRandomDate(),
        "MinResponses": 100,
        "MaxResponses": 500
    },
    {
        "SurveyID": 2,
        "SurveyStatusID": 2,
        "Name": "Report Interpretation",
        "Description": "Satisfaction from Interpretation Session",
        "StartDate": generateRandomDate(),
        "EndDate": generateRandomDate(),
        "MinResponses": 100,
        "MaxResponses": 500
    },
    {
        "SurveyID": 3,
        "SurveyStatusID": 3,
        "Name": "User Confounding Variables",
        "Description": "Collect user data",
        "StartDate": generateRandomDate(),
        "EndDate": generateRandomDate(),
        "MinResponses": 100,
        "MaxResponses": 500
    },
    {
        "SurveyID": 4,
        "SurveyStatusID": 4,
        "Name": "Customer Feedback Survey",
        "Description": "Gathering feedback from customers",
        "StartDate": generateRandomDate(),
        "EndDate": generateRandomDate(),
        "MinResponses": 100,
        "MaxResponses": 500
    },
    {
        "SurveyID": 5,
        "SurveyStatusID": 1,
        "Name": "Product Satisfaction Survey",
        "Description": "Evaluating satisfaction with our products",
        "StartDate": generateRandomDate(),
        "EndDate": generateRandomDate(),
        "MinResponses": 50,
        "MaxResponses": 300
    }
];

export const questionType = [
    {
        "QuestionTypeID": 1,
        "QuestionType": "Open"
    },
    {
        "QuestionTypeID": 2,
        "QuestionType": "Dropdown"
    },
    {
        "QuestionTypeID": 3,
        "QuestionType": "Multiple Choice"
    },
    {
        "QuestionTypeID": 4,
        "QuestionType": "Boolean"
    },
    {
        "QuestionTypeID": 5,
        "QuestionType": "Rating Scale"
    },
    {
        "QuestionTypeID": 6,
        "QuestionType": "Short Answer"
    }
];

export const question = [
    {
        "QuestionID": 1,
        "SurveyID": 2,
        "QuestionTypeID": 2,
        "Order": 1,
        "QuestionText": "How satisfied are you with the Interpretation Session?",
        "IsMandatory": true
    },
    {
        "QuestionID": 4,
        "SurveyID": 2,
        "QuestionTypeID": 1,
        "Order": 1,
        "QuestionText": "Bu bir open question",
        "IsMandatory": true
    },
    {
        "QuestionID": 2,
        "SurveyID": 2,
        "QuestionTypeID": 2,
        "Order": 2,
        "QuestionText": "What could be improved in the Interpretation Session?",
        "IsMandatory": false
    },
    {
        "QuestionID": 3,
        "SurveyID": 3,
        "QuestionTypeID": 3,
        "Order": 1,
        "QuestionText": "What is your preferred method of payment?",
        "IsMandatory": true
    },
    {
        "QuestionID": 4,
        "SurveyID": 3,
        "QuestionTypeID": 4,
        "Order": 2,
        "QuestionText": "Did you find the registration process easy?",
        "IsMandatory": true
    },
    {
        "QuestionID": 5,
        "SurveyID": 4,
        "QuestionTypeID": 5,
        "Order": 1,
        "QuestionText": "On a scale from 1 to 10, how satisfied are you with our service?",
        "IsMandatory": true
    },
    {
        "QuestionID": 9,
        "SurveyID": 4,
        "QuestionTypeID": 5,
        "Order": 1,
        "QuestionText": "On a scale from  how satisfied are you with our service?",
        "IsMandatory": true
    },
    
    {
        "QuestionID": 6,
        "SurveyID": 5,
        "QuestionTypeID": 6,
        "Order": 1,
        "QuestionText": "Please provide any additional comments or suggestions.",
        "IsMandatory": false
    }
];