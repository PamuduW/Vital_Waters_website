const questionsData = [
    // Array containing question objects for each step. Each object should have a "question" property and an "answer" property (optional)
    [
      { question: "What is your name?" },
      { question: "What is your favorite color?" },
      { question: "What is your preferred pet?" },
      { question: "What country do you live in?" },
      { question: "What is your favorite hobby?" },
    ],
    [
      { question: "What is your favorite food?" },
      { question: "What kind of music do you enjoy?" },
      { question: "Do you prefer reading or watching movies?" },
      { question: "What is your dream vacation destination?" },
      { question: "What is one skill you'd like to learn?" },
    ],
    [
      { question: "What is your favorite book?" },
      { question: "What is your biggest fear?" },
      { question: "What is your proudest accomplishment?" },
      { question: "If you could have any superpower, what would it be?" },
      { question: "What advice would you give your younger self?" },
    ],
    [
      { question: "What is the most important thing in life to you?" },
      { question: "What are you passionate about?" },
      { question: "What is your biggest dream?" },
      { question: "How would you like to be remembered?" },
      { question: "Thank you for participating!" },
    ],
  ];
  
  let currentStep = 0;
  let answeredQuestions = {};
  
  function updateProgress() {
    const progress = (currentStep / questionsData.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    document.getElementById("progress-text").textContent = `Step ${currentStep + 1} (${progress.toFixed(1)}%)`;
}

function displayQuestions() {
  const questionContainer = document.getElementById("questions");
  questionContainer.innerHTML = ""; // Clear previous questions

  const currentQuestions = questionsData[currentStep];
  for (let i = 0; i < currentQuestions.length; i++) {
    const question = currentQuestions[i];
    const questionElement = document.createElement("li");
    questionElement.textContent = question.question;

    // Check if answer was previously provided for this question
    const answer = answeredQuestions[`${currentStep}-${i}`];
    if (answer) {
      const answerElement = document.createElement("span");
      answerElement.textContent = ` (Answered: ${answer})`;
      questionElement.appendChild(answerElement);
    }

    questionContainer.appendChild(questionElement);
  }
}

function handleNextStep() {
  if (currentStep < questionsData.length - 1) {
    currentStep++;
    updateProgress();
    displayQuestions();
  } else {
    // Handle completing the quiz (e.g., display completion message)
    alert("Congratulations! You have completed the quiz.");
  }
}

function handleSkipStep() {
  if (currentStep < questionsData.length - 1) {
    currentStep++;
    updateProgress();
    displayQuestions();
  }
}

document.getElementById("next-step").addEventListener("click", handleNextStep);
document.getElementById("skip-step").addEventListener("click", handleSkipStep);

displayQuestions();
updateProgress();
  