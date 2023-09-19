export const response = [
    {
        "ResponseID": 1, //INT //PRIMARY KEY
        "RespondentID": 1, //INT //FOREIGN KEY
        "SurveyID": 1, //INT //FOREIGN KEY
        "StartDate": "YYYY-MM-DD HH:MI:SS", //DATETIME
        "EndDate": "YYYY-MM-DD HH:MI:SS", //DATETIME
    },

]

// for people whom not tested bu UNIQGENE that has no swabcode
export const nonuniqrespondent = [
    {
        "RespondentID": 1, //INT //PRIMARY KEY
        "Name": "Irmak Ege", //VARCHAR(100)
        "Email": "irmak@uniqgene.com", //VARCHAR(100)
    }
]

// for people whom tested bu UNIQGENE that has swabcode
export const uniqrespondent = [
    {
        "RespondentID": 1, //INT //PRIMARY KEY
        "Code": "123456", //VARCHAR(100) //Swabcodes
    },
]

export const answer = [
    {
        "AnswerID": 1, //INT //PRIMARY KEY
        "ResponseID": 1, //INT //FOREIGN KEY
        "QuestionID": 1, //INT //FOREIGN KEY
        "Answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at.", //TEXT
    },
]