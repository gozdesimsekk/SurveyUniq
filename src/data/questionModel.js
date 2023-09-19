export const surveyStatus = 
[
    {
    "SurveyStatusID": 1, //INT //PRIMARY KEY
    "SurveyStatus": "Open" //VARCHAR(100)
    },
    {
    "SurveyStatusID": 2, //INT //PRIMARY KEY
    "SurveyStatus": "Closed" //VARCHAR(100)
    },
    {
    "SurveyStatusID": 3, //INT //PRIMARY KEY
    "SurveyStatus": "Planned" //VARCHAR(100)
    },
    {
    "SurveyStatusID": 4, //INT //PRIMARY KEY
    "SurveyStatus": "Suspended" //VARCHAR(100)
    }
]

export const surveyInfo = 
[
    {
        "SurveyID": 1, //INT //PRIMARY KEY
        "SurveyStatusID": 1, //INT //FOREIGN KEY
        "Name": "Nutrition Demand Survey", //VARCHAR(100)
        "Description": "Collecting demand to nutrition package", //TEXT
        "StartDate": "YYYY-MM-DD HH:MI:SS", //DATETIME
        "EndDate": "YYYY-MM-DD HH:MI:SS", //DATETIME
        "MinResponses": "100", //INT
        "MaxResponses": "500" //INT
    },
    {
        "SurveyID": 2, //INT //PRIMARY KEY
        "SurveyStatusID": 2, //INT //FOREIGN KEY
        "Name": "Report Interpretation", //VARCHAR(100)
        "Description": "Satisfaction from Interpretation Session", //TEXT
        "StartDate": "YYYY-MM-DD HH:MI:SS", //DATETIME
        "EndDate": "YYYY-MM-DD HH:MI:SS", //DATETIME
        "MinResponses": "100", //INT
        "MaxResponses": "500" //INT
    },
    {
        "SurveyID": 3, //INT //PRIMARY KEY
        "SurveyStatusID": 3, //INT //FOREIGN KEY
        "Name": "User Confounding Variables", //VARCHAR(100)
        "Description": "Collect user data", //TEXT
        "StartDate": "YYYY-MM-DD HH:MI:SS", //DATETIME
        "EndDate": "YYYY-MM-DD HH:MI:SS", //DATETIME
        "MinResponses": "100", //INT
        "MaxResponses": "500" //INT
    }
]

export const questionType = 
[
    {
        "QuestionTypeID": 1, //INT //PRIMARY KEY
        "QuestionType": "Open", //VARCHAR(100)
    },
    {
        "QuestionTypeID": 2, //INT //PRIMARY KEY
        "QuestionType": "Dropdown", //VARCHAR(100)
    },
    {
        "QuestionTypeID": 3, //INT //PRIMARY KEY
        "QuestionType": "Multiple Choice", //VARCHAR(100)
    },
    {
        "QuestionTypeID": 4, //INT //PRIMARY KEY
        "QuestionType": "Boolean", //VARCHAR(100)
    },
]

export const question = 
[
    {
        "QuestionID": 1, //INT //PRIMARY KEY
        "SurveyID": 2, //INT //FOREIGN KEY
        "QuestionTypeID": 2, //INT //FOREIGN KEY
        "Order": 1, //INT
        "QuestionText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at.", //VARCHAR(2000)
        "IsMandatory": "True" //BOOLEAN
    },
    {
        "QuestionID": 2, //INT
        "SurveyID": 2, //INT //FOREIGN KEY
        "QuestionTypeID": 2, //INT //FOREIGN KEY
        "Order": 2, //INT
        "QuestionText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at.", //VARCHAR(2000)
        "IsMandatory": "False" //BOOLEAN
    }
]


