const generateRandomDate = () => {
    const year = 2023;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);
    const second = Math.floor(Math.random() * 60);

    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
};

export const response = [
    {
        "ResponseID": 1,
        "RespondentID": 1,
        "SurveyID": 1,
        "StartDate": generateRandomDate(),
        "EndDate": generateRandomDate(),
    },
    {
        "ResponseID": 2,
        "RespondentID": 2,
        "SurveyID": 1,
        "StartDate": generateRandomDate(),
        "EndDate": generateRandomDate(),
    },
    {
        "ResponseID": 3,
        "RespondentID": 2,
        "SurveyID": 1,
        "StartDate": generateRandomDate(),
        "EndDate": generateRandomDate(),
    }

];


export const nonuniqrespondent = [
    {
        "RespondentID": 1,
        "Name": "John Doe",
        "Email": "john.doe@example.com",
    },
    {
        "RespondentID": 2,
        "Name": "Jane Doe",
        "Email": "jane.doe@example.com",
    }
];

export const uniqrespondent = [
    {
        "RespondentID": 1,
        "Code": "123456",
    },
    {
        "RespondentID": 2,
        "Code": "654321",
    },
];

export const answer = [
    {
        "AnswerID": 1,
        "ResponseID": 1,
        "QuestionID": 1,
        "Answer": "Very satisfied with the Interpretation Session.",
    },
    {
        "AnswerID": 2,
        "ResponseID": 1,
        "QuestionID": 2,
        "Answer": "The session was informative, but it could be more interactive.",
    },
    {
        "AnswerID": 2,
        "ResponseID": 2,
        "QuestionID": 1,
        "Answer": "I prefer to pay with credit card.",
    },
    {
        "AnswerID": 3,
        "ResponseID": 2,
        "QuestionID": 2,
        "Answer": "Yes, the registration process was very easy.",
    },
    {
        "AnswerID": 4,
        "ResponseID": 2,
        "QuestionID": 3,
        "Answer": "8",
    },
  
    
    {
        "AnswerID": 7,
        "ResponseID": 2,
        "QuestionID": 6,
        "Answer": "I was very satisfied with the service. The staff was friendly and helpful.",
    },
    {
        "AnswerID": 6,
        "ResponseID": 2,
        "QuestionID": 5,
        "Answer": "8",
    },
    {
        "AnswerID": 6,
        "ResponseID": 2,
        "QuestionID": 5,
        "Answer": "9",
    },
    {
        "AnswerID": 6,
        "ResponseID": 2,
        "QuestionID": 5,
        "Answer": "9",
    },

    {
        "AnswerID": 6,
        "ResponseID": 2,
        "QuestionID": 5,
        "Answer": "1",
    },
    {
        "AnswerID": 4,
        "ResponseID": 3, // Bir yanıtın hangi cevaba ait olduğunu belirten ID
        "QuestionID": 5, // Bu yanıtın hangi soruya verildiğini belirten ID
        "Answer": "9" // Yanıt değeri
    },
    {
        "AnswerID": 2,
        "ResponseID": 5, // Bir yanıtın hangi cevaba ait olduğunu belirten ID
        "QuestionID": 4, // Bu yanıtın hangi soruya verildiğini belirten ID
        "Answer": "yes please" // Yanıt değeri
    },
    {
        "AnswerID": 5,
        "ResponseID": 2,
        "QuestionID": 4,
        "Answer": "Yes it is",
    },
   
];