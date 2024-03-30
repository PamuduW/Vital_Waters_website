let progress = 0;
let Answer;
let profile_completed_percentage;
let Total_questions = 16;

let Question_number = 0;
let Questions_in_section = 4;
let Section_number = 1;
const section_1 = document.getElementsByClassName("Section_1");

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your first name: "
);
section_1[0].innerHTML = "Name : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your surname name: "
);
section_1[1].innerHTML = "Surname : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your age: "
);
section_1[2].innerHTML = "Age : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter the relevent letter of your gender (Male = M or Female = F): "
);
section_1[3].innerHTML = "Gender : " + Answer;

profile_completed_percentage = (progress / Total_questions) * 100;
document.getElementById("profile_completed_percentage_section_1").innerHTML =
  "Profile completed " + profile_completed_percentage + "%";

Question_number = 0;
Questions_in_section = 4;
Section_number = 2;
const section_2 = document.getElementsByClassName("Section_2");

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your first name: "
);
section_2[0].innerHTML = "Name : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your surname name: "
);
section_2[1].innerHTML = "Surname : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your age: "
);
section_2[2].innerHTML = "Age : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter the relevent letter of your gender (Male = M or Female = F): "
);
section_2[3].innerHTML = "Gender : " + Answer;

profile_completed_percentage = (progress / Total_questions) * 100;
document.getElementById("profile_completed_percentage_section_2").innerHTML =
  "Profile completed " + profile_completed_percentage + "%";

Question_number = 0;
Questions_in_section = 4;
Section_number = 3;
const section_3 = document.getElementsByClassName("Section_3");

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your first name: "
);
section_3[0].innerHTML = "Name : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your surname name: "
);
section_3[1].innerHTML = "Surname : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your age: "
);
section_3[2].innerHTML = "Age : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter the relevent letter of your gender (Male = M or Female = F): "
);
section_3[3].innerHTML = "Gender : " + Answer;

profile_completed_percentage = (progress / Total_questions) * 100;
document.getElementById("profile_completed_percentage_section_3").innerHTML =
  "Profile completed " + profile_completed_percentage + "%";

Question_number = 0;
Questions_in_section = 4;
Section_number = 4;
const section_4 = document.getElementsByClassName("Section_4");

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your first name: "
);
section_4[0].innerHTML = "Name : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your surname name: "
);
section_4[1].innerHTML = "Surname : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter your age: "
);
section_4[2].innerHTML = "Age : " + Answer;

Question_number += 1;
progress += 1;
Answer = prompt(
  "Section " +
    Section_number +
    ": Personal details | Question  " +
    Question_number +
    "/" +
    Questions_in_section +
    "\n" +
    "Please enter the relevent letter of your gender (Male = M or Female = F): "
);
section_4[3].innerHTML = "Gender : " + Answer;

profile_completed_percentage = (progress / Total_questions) * 100;
document.getElementById("profile_completed_percentage_section_4").innerHTML =
  "Profile completed " + profile_completed_percentage + "%";

const previous_button = document.getElementById("previous_button");
const next_button = document.getElementById("next_button");

function Previous_prompt() {
  if (progress > 0) {
    progress--;
    update_UI();
  }
}

function Next_prompt() {
  if (progress < Total_questions) {
    progress++;
    update_UI();
  }
}

function update_UI() {}

function Show_prompt() {
  if (progress < Total_questions) {
  }
}
