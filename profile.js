let questions = [
  [
    "Name : ",
    "Surname : ",
    "Age : ",
    "Gender (M/F) : ",
    "Agree with privacy terms (Yes/No) : ",
  ],
  ["Rational : ", "DoA : ", "Task : ", "Place : ", "Assignment type : "],
  [
    "Area of study : ",
    "Highest degree : ",
    "University/Institution : ",
    "Completion year : ",
    "Country : ",
  ],
  [
    "Availability for volunteering : ",
    "Address : ",
    "Tel. No. : ",
    "Email : ",
    "Confirm all the above data is true (Yes/No) : ",
  ],
];

let answers = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

let questionType = [
  "<b>Personal Details</b>",
  "<b>Volunteering Tasks</b>",
  "<b>Qualifiations</b>",
  "<b>Avaiability and contact</b>",
];

let questionPlaceHolder = [
  [
    "Input firstname",
    "Input surname : ",
    "Input age",
    "Gender (M/F) : ",
    "Agree with privacy terms (Yes/No) : ",
  ],
  ["Rational : ", "DoA : ", "Task : ", "Place : ", "Assignment type : "],
  [
    "Input your area of study",
    "What is your highest degree of education ",
    "University/Institution",
    "Completion year",
    "Country",
  ],
  [
    "Availability for volunteering",
    "Address",
    "Tel. No. : ",
    "Email : ",
    "Confirm all the above data is true (Yes/No) :",
  ],
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
document.querySelector("input").placeholder = `${questionPlaceHolder[i][j]}`;

function dataOut() {
  document.querySelector(".current_question").innerHTML = `${questions[i][j]}`;
  document.querySelector("input").placeholder = `${questionPlaceHolder[i][j]}`;
  current_stage_progressbar = (j / questions[i].length) * 100;
  document.querySelector(".current_stage_progress").innerHTML = `<div class="empty-progress-bar" style="width:80%">&nbsp;</div><div class="progress-bar" style="width: ${current_stage_progressbar}%;">${current_stage_progressbar}%</div>`;
}

function done() {
  alert("All done!!!");
  document.querySelector(".current_stage_name").innerHTML = `Thank you...`;
  document.querySelector(".current_question").innerHTML = ``;
  document.querySelector("input").placeholder = "";
  document.querySelector(".current_stage_progress").style.display = "none";
}

function stageUpdate(){
  document.querySelector(".current_stage_name").innerHTML = `${questionType[i]}`;
  document.querySelector(".profile_progress").innerHTML = `<div class="empty-progress-bar" style="width:80%">&nbsp;</div> <div class="progress-bar" style="width: ${i * 20}%;">${i * 25}%</div>`;
}

function gettingTheAnswer() {
  let current_stage_progressbar = 0;
  if (i == questionType.length && j == 0) {
    alert("All done!!! Thank you...");
    return;
  } else if (document.querySelector("input").value == "") {
    alert("Please fill the blank");
    return;
  } else if (j + 1 == questions[i].length) {
    document.querySelector(".current_stage_name").innerHTML = `${questionType[i + 1]}`;
    document.querySelector(".profile_progress").innerHTML = `<div class="empty-progress-bar" style="width:80%">&nbsp;</div> <div class="progress-bar" style="width: ${i + 1 * 20}%;">${i + 1 * 25}%</div>`;
  }
  answers[i][j] = document.querySelector("input").value;
  dataholder[i][j].innerHTML = `${questions[i][j]} - ${answers[i][j]}`;
  document.querySelector(`.set${i + 1}`).style.display = "block";
  j += 1;
  document.querySelector("input").value = "";
  if (j == questions[i].length) {
    (i += 1), (j = 0);
  }
  if (i == questionType.length && j == 0) {
    done();
    return;
  }
  dataOut();
}

function goingToPreviousQuestion() {
  if (i == 0 && j == 0) {
    alert("You are in first Question, can't go back !!!");
    return;
  } else if (j == 0) {
    (i -= 1), (j = questions[i].length - 1);
    stageUpdate();
  } else {
    j -= 1;
  }
  dataOut();
}

function skippingToNextQuestion() {
  if (i == questionType.length && j == 0) {
    alert("All done!!! Thank you...");
    return;
  }
  answers[i][j] = "Skipped";
  document.querySelector(`.set${i + 1}`).style.display = "block";
  dataholder[i][j].innerHTML = `${questions[i][j]} - ${answers[i][j]}`;
  if (j + 1 == questions[i].length) {
    (i += 1), (j = 0);
    stageUpdate();
   } else {
    j += 1;
  }
  if (i == questions.length && j == 0) {
    done();
    return;
  }
  dataOut();
}