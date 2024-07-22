// script.js

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start");
  const submitButton = document.getElementById("submit");
  const problemElement = document.getElementById("problem");
  const answerInput = document.getElementById("answer");
  const resultElement = document.getElementById("result");
  const timerElement = document.getElementById("time");
  const scoreElement = document.getElementById("score");
  const game = document.getElementById("game");
  submitButton.disabled = true;

  let score = 0;
  let timeLeft = 30;
  let currentProblem = {};
  let timerInterval;

  startButton.addEventListener("click", startGame);
  game.addEventListener("submit", (e) => {
    e.preventDefault();
    checkAnswer();
  });

  function startGame() {
    score = 0;
    timeLeft = 30;
    scoreElement.textContent = `Score: ${score}`;
    timerElement.textContent = timeLeft;
    startButton.disabled = true;
    answerInput.disabled = false;
    submitButton.disabled = false;
    answerInput.value = "";
    resultElement.textContent = "";

    generateProblem();
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }, 1000);
  }

  function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let answer;

    currentProblem = {
      num1,
      num2,
      operator,
      answer: eval(`${num1} ${operator} ${num2}`),
    };
    problemElement.textContent = `${num1} ${operator} ${num2} = ?`;
  }

  function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    if (userAnswer === currentProblem.answer) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Wrong!";
    }
    answerInput.value = "";
    generateProblem();
  }

  function endGame() {
    startButton.disabled = false;
    answerInput.disabled = true;
    submitButton.disabled = true;
    resultElement.textContent = `Game over! Your final score is ${score}.`;
  }
});
