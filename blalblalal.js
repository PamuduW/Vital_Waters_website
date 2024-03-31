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

const data1 = document.getElementsByClassName("data1");
const data2 = document.getElementsByClassName("data2");
const data3 = document.getElementsByClassName("data3");
const data4 = document.getElementsByClassName("data4");

const set1 = document.getElementsByClassName("set1");
const set2 = document.getElementsByClassName("set2");
const set3 = document.getElementsByClassName("set3");
const set4 = document.getElementsByClassName("set4");

let dataholder = [data1, data2, data3, data4];
let setholder = [set1, set2, set3, set4];

let i = 0,
  j = 0,
  k = 0;

function gettingData() {
  if (j == questions[i].length) {
    alert("Please go to the next stage");
    return;
  }
  answers[i][j] = prompt(questions[i][j]);
  holder[i][j].innerHTML = `${questions[i][j]} - ${answers[i][j]}`;
  j += 1;
}

function goingToNextStage() {
  if (j < questions[i].length) {
    alert("Please go through the steps...");
    return;
  } else if (i + 1 < questions.length) {
    (i += 1), (j = 0);
    alert(i);
    return;
  } else {
    alert("Done !!! Thank you.");
    return;
  }
}

// function goingToNextStage() {
//   (i += 1), (j = 0);
//   if (i == questions.length) {
//     alert("Done !!! Thank you.");
//     return;
//   }
// }
