var qIndex = 0;
var startBtn = document.getElementById("start"); //IMPORTANT -- DOM elements
var timerTime = 30;
var timer = document.getElementById("timer");
var questionBox = document.getElementById("questionBox");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var scoreCount = document.getElementById("scoreCount");

var userScore = 0;

var questions = [
  {
    quote: "Which data type in JS is true or false?",
    options: ["Array", "Boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "The condition of an if/else statement is wrapped in?",
    options: ["Quotes", "Parentheses", "Curly brackets", "Square bracket"],
    correct: "Parentheses",
  },
  {
    quote: "Which data type in JS is true or false?",
    options: ["Array", "Boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "Which data type in JS is true or false?",
    options: ["Array", "Boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "Which data type in JS is true or false?",
    options: ["Array", "Boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
];

function countDown() {
  timer.innerHTML = "<h2> timer: ${timerTime}</h2>";
  timerTime--;
}

function checkAnswer(e) {
  var answer = e.target.innerText;
  console.log(answer);
  if (answer === questions[qIndex].correct) {
    userScore++;
    scoreCount.innerHTML = "<h2>Score: ${userScore}</h2>";
    qIndex++;
    questionCycle();
  } else {
    timerTime--;
    qIndex++;
    scoreCount.innerHTML = "<h2>Score: ${userScore}</h2>";
    questionCycle();
  }
}
//var userScore = prompt("Your score was " + userScore);

function startQuiz() {
  setInterval(countDown, 1000);
  questionCycle();
  //hide opener section
  //unhide 1st question
  //timer needs to start
  //run questionCycle()
}

function questionCycle() {
  //loop through questions -- index = 0
  answerBox.classList.remove("hide");
  questionBox.innerHTML = "<h2>Question: ${questions[qIndex].quote}/h2>";
  button1.innerText = questions[qIndex].options[0];
  button2.innerText = questions[qIndex].options[1];
  button3.innerText = questions[qIndex].options[2];
  button4.innerText = questions[qIndex].options[3];

  button1.addEventListener("click", checkAnswer);
  button2.addEventListener("click", checkAnswer);
  button3.addEventListener("click", checkAnswer);
  button4.addEventListener("click", checkAnswer);
}

startBtn.addEventListener("click", startQuiz);

//checkAnswer()
//comtaimer for questions and answers
//new HTML page for high scores
