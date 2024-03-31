let questions = [
  [
    "Name : ",
    "Surname : ",
    "Age : ",
    "Gender (M/F) : ",
    "Agree with privacy terms (Yes/No) : ",
  ],
  ["Rational : ", "DoA : ", "Task : ", "Place : ", "Assignment type : "],
//   [
//     "Area of study : ",
//     "Highest degree : ",
//     "University/Institution : ",
//     "Completion year : ",
//     "Country : ",
//   ],
//   [
//     "Availability for volunteering : ",
//     "Surname : ",
//     "Tel. No. : ",
//     "Email : ",
//     "Game on : ",
//   ],
];

let answers = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
];

let questiontype = [
  "<b>Personal Details</b>",
  "<b>Volunteering Tasks</b>",
//   "<b>Qualifiations</b>",
//   "<b>Avaiability and contact</b>",
];

let data = "";

for (i = 0; i < questions.length; i++) {
    data += questiontype[i] + "<br>";
  for (j = 0; j < questions[i].length; j++) {
    let answer = prompt(questions[i][j]);
    answers[i][j] = answer;
    data += questions[i][j] + answer + "<br>"
  }
}

document.getElementById("info").innerHTML = data;