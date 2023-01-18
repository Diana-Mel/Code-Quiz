//TODO

//Create a timer which reduces the score by 1 each second.

//Have a function which hides the quiz and shows the end screen when the
//time reduces to zero. (The same function could be used when all the questions
//are answered)

//Have a function which hides the welcome element and shows the questions

//Have a function which takes a question object and adds the text to the question element
//and creates a button for each answer (make sure the button has a reference to which answer it is
//showing)

//Have a function which recognises an answer button click, reduce the score if incorrect.

//Have a function which moves to the next question.

//Have a function which saves the user's score to localstorage when they click submit.

//Have a function which deletes all scores from localstorage.*/



var startButton = document.querySelector("#start");
var questionsContainer = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");
var timer = document.querySelector("#time");
var clear = document.querySelector("#clear");
var startScreen = document.querySelector("#start-screen")

let currentQuestion = 0;

let score = 0;
let counter = 60;
let timerId;

startButton.addEventListener("click", startQuiz);
choices.addEventListener("click", checkAnswer);
submitButton.addEventListener("click", saveScore);

function startQuiz() {
  startButton.setAttribute('class', 'hide');
  questionsContainer.setAttribute('class', 'visible');
  showQuestion();
  startTimer();
}

function showQuestion() {
  startScreen.setAttribute('class', 'hide')
  var question = questions[currentQuestion];
  console.log(question)
  questionTitle.textContent = question.title;
  choices.innerHTML = "";
  for (let i = 0; i < question.choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = question.choices[i];
    choiceButton.dataset.index = i;
    choices.appendChild(choiceButton);
  }
}
  
function checkAnswer(event) {
  var selectedButton = event.target;
  var correct = questions[currentQuestion].answer;
  console.log(correct)

  if (selectedButton.dataset.index == correct) {
    feedback.setAttribute('class', 'visible');
    feedback.textContent = "Correct!";
    score += 1;
  } else {
    feedback.setAttribute('class', 'visible');
    feedback.textContent = "Wrong!";
    counter -= 10;
  }
  currentQuestion++;
  
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  clearInterval(timerId);
  startScreen.setAttribute('class', 'hide')
  questionsContainer.setAttribute('class', 'hide')
  endScreen.setAttribute('class', 'visible');
  finalScore.textContent = score;
  console.log(score)
}

function startTimer() {
  timerId = setInterval(function() {
    counter--;
    timer.textContent = counter;
    if (counter === 0) {
      endQuiz();
      clearInterval(timerId);
    }
  }, 1000);
}

function saveScore() {
  var initials = initialsInput.value;
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);
  window.location.href = "highscores.html";
}

