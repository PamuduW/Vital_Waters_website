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

const current_question = document.getElementsByClassName("current_question");
const current_stage_progress = document.getElementsByClassName(
  "current_stage_progress"
);

const profile_progress = document.getElementsByClassName("profile_progress");

const set1 = document.getElementsByClassName("set1");
const set2 = document.getElementsByClassName("set2");
const set3 = document.getElementsByClassName("set3");
const set4 = document.getElementsByClassName("set4");

const data1 = document.getElementsByClassName("data1");
const data2 = document.getElementsByClassName("data2");
const data3 = document.getElementsByClassName("data3");
const data4 = document.getElementsByClassName("data4");

let dataholder = [data1, data2, data3, data4];
let setholder = [set1, set2, set3, set4];
let i = 0,
  j = 0;

function gettingTheAnswer() {
  if (j == questions[i].length) {
    alert("Please go to the next stage");
    return;
  } else if (j == 0) {
    document.querySelector(
      ".current_stage_name"
    ).innerHTML = `<br>${questionType[i]}`;
    document.querySelector(".set1").style.display = "block";
    setholder[i][0].innerHTML = `<legend><br>${questionType[i]}</legend>`;

    let profile_progressbar = ((i + 1) / questions.length) * 100;
    profile_progress[0].innerHTML = `<div class="progress-bar" style="width: ${
      profile_progressbar - 20
    }%;">${profile_progressbar}%</div>`;
  }

  let temp = prompt(questions[i][j]);
  if (temp == "") {
    temp = "Unanswered";
  }
  answers[i][j] = temp;
  dataholder[i][j].innerHTML = `${questions[i][j]} - ${answers[i][j]}`;
  j += 1;

  let current_stage_progressbar = (j / questions[i].length) * 100;
  current_stage_progress[0].innerHTML = `<div class="progress-bar" style="width: ${
    current_stage_progressbar - 20
  }%;">${current_stage_progressbar}%</div>`;
}

function goingToPreviousQuestion() {}

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

function goingTopreviousStage() {
  if (i > 0) {
    (i -= 1), (j = 0);
    alert(i);
    return;
  } else {
    alert("Cannot Go Back Further!!!");
    return;
  }
}

function skippingToNextStage() {
  if (i < questions.length) {
    if (j == questions[i].length) {
      alert("Please go to the next stage");
      return;
    }
    for (j = 0; j < questions[i].length; j++) {
      answers[i][j] = "Skipped";
      if (j == 0) {
        setholder[i][0].innerHTML = `<br>${questiontype[i]}`;
        let bar = ((i + 1) / questions.length) * 100;
        progress[0].innerHTML = `<div class="progress-bar" style="width: ${
          bar - 20
        }%;">${bar}%</div>`;
      }
      dataholder[i][j].innerHTML = `${questions[i][j]} - ${answers[i][j]}`;
    }
    if (i + 1 == questions.length) {
      alert("Done !!! Thank you.");
      return;
    }
    (i += 1), (j = 0);
    alert(i);
    return;
  } else {
    alert("Done !!! Thank you.");
    return;
  }
}
