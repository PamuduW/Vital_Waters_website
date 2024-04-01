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

let questionType = [
  "<b>Personal Details</b>",
  "<b>Volunteering Tasks</b>",
  //   "<b>Qualifiations</b>",
  //   "<b>Avaiability and contact</b>",
];

let questionPlaceHolder = [
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

const data1 = document.getElementsByClassName("data1");
const data2 = document.getElementsByClassName("data2");
const data3 = document.getElementsByClassName("data3");
const data4 = document.getElementsByClassName("data4");

let dataholder = [data1, data2, data3, data4];
let i = 0,
  j = 0;

document.querySelector(".current_stage_name").innerHTML = `${questionType[i]}`;
document.querySelector(".current_question").innerHTML = `${questions[i][j]}`;

function gettingTheAnswer() {
  if (i == questionType.length && j == 0) {
    alert("All done!!! Thank you...");
    return;
  } else if (document.querySelector("input").value == "") {
    alert("Please fill the blank");
    return;
  } else if (j + 1 == questions[i].length) {
    document.querySelector(".current_stage_name").innerHTML = `${
      questionType[i + 1]
    }`;
    let profile_progressbar = ((i + 1) / questions.length) * 100;
    document.querySelector(
      ".profile_progress"
    ).innerHTML = `<div class="progress-bar" style="width: ${profile_progressbar}%;">${profile_progressbar}%</div>`;
  }
  let temp = document.querySelector("input").value;
  console.log(temp);
  answers[i][j] = temp;
  dataholder[i][j].innerHTML = `${questions[i][j]} - ${answers[i][j]}`;
  document.querySelector(`.set${i + 1}`).style.display = "block";
  j += 1;
  document.querySelector("input").value = "";
  if (j == questions[i].length) {
    (i += 1), (j = 0);
  }
  let current_stage_progressbar = (j / questions[i].length) * 100;
  document.querySelector(
    ".current_stage_progress"
  ).innerHTML = `<div class="progress-bar" style="width: ${current_stage_progressbar}%;">${current_stage_progressbar}%</div>`;
  if (i == questionType.length && j == 0) {
    alert("All done!!!");
    document.querySelector(".current_stage_name").innerHTML = `Thank you...`;
    document.querySelector(".current_question").innerHTML = ``;
    return;
  }
  document.querySelector(".current_question").innerHTML = `${questions[i][j]}`;
}

function goingToPreviousQuestion() {
  if (i == 0 && j == 0) {
    alert("You are in first Question, can't go back!");
    return;
  } else if (j == 0) {
    (i -= 1), (j = questions[i].length - 1);
    let profile_progressbar = (i / questions.length) * 100;
    document.querySelector(
      ".profile_progress"
    ).innerHTML = `<div class="progress-bar" style="width: ${profile_progressbar}%;">${profile_progressbar}%</div>`;
  } else {
    j -= 1;
  }
  document.querySelector(
    ".current_stage_name"
  ).innerHTML = `${questionType[i]}`;
  document.querySelector(".current_question").innerHTML = `${questions[i][j]}`;
  let current_stage_progressbar = (j / questions[i].length) * 100;
  document.querySelector(
    ".current_stage_progress"
  ).innerHTML = `<div class="progress-bar" style="width: ${current_stage_progressbar}%;">${current_stage_progressbar}%</div>`;
}

function skippingToNextQuestion() {
  if (i == questionType.length && j == 0) {
    alert("All done!!! Thank you...");
    return;
  }
  document.querySelector(
    ".current_stage_name"
  ).innerHTML = `${questionType[i]}`;
  answers[i][j] = "Skipped";
  dataholder[i][j].innerHTML = `${questions[i][j]} - ${answers[i][j]}`;
  document.querySelector(`.set${i + 1}`).style.display = "block";
  if (j + 1 == questions[i].length) {
    (i += 1), (j = 0);
    let profile_progressbar = (i / questions.length) * 100;
    document.querySelector(
      ".profile_progress"
    ).innerHTML = `<div class="progress-bar" style="width: ${profile_progressbar}%;">${profile_progressbar}%</div>`;
  } else {
    j += 1;
  }
  document.querySelector(".current_question").innerHTML = `${questions[i][j]}`;
  let current_stage_progressbar = (j / questions[i].length) * 100;
  document.querySelector(
    ".current_stage_progress"
  ).innerHTML = `<div class="progress-bar" style="width: ${current_stage_progressbar}%;">${current_stage_progressbar}%</div>`;
}