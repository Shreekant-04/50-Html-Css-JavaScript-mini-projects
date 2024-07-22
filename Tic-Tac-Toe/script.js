console.log("hello");
//accessing all elements
const blocks = document.querySelectorAll(".block");
const resetBtn = document.querySelector(".reset-game");
const resetScoreBtn = document.querySelector(".reset-score");
const score = document.querySelectorAll(".score");
const result = document.querySelector(".result");
let player = false; //true for player1 and false for player 2

// winning pattern
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [1, 4, 7],
  [2, 5, 8],
  [6, 7, 8],
  [2, 4, 6],
];

let count = 0;

// creating functions

// reset game
function resetGame() {
  blocks.forEach((block) => {
    block.innerText = "";
    block.disabled = false;
  });
  result.style.visibility = "hidden";
  player = false;
  count = 0;
}
//reset game and score
function resetAll() {
  let confirm = window.confirm("are you sure");
  if (confirm) {
    resetGame();
    player1 = 0;
    player2 = 0;
    score.forEach((el) => (el.innerText = "00"));
  }
}

// tie
const tie = () => {
  result.innerText = "A battle of equals! The game ends in a thrilling tie!";
  result.style.color = "red";
  result.style.visibility = "visible";
};
// checking winner by comparing  to winner pattern
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let val1 = blocks[pattern[0]].innerText;
    let val2 = blocks[pattern[1]].innerText;
    let val3 = blocks[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
      }
    }
  }

  if (count === 9) {
    tie();
  }
};
let player1 = 0;
let player2 = 0;
const showWinner = (winner) => {
  winner === "⭕"
    ? (result.innerText = `Champions! Player 1 takes the game!`)
    : (result.innerText = `Champions! Player 2 takes the game!`);

  winner === "⭕" ? player1++ : player2++;
  blocks.forEach((block) => (block.disabled = true)); // disabling all buttons
  document.querySelector(".player1 h3").innerText =
    player1 < 9 ? `0${player1}` : player1; // updating player 1 score
  document.querySelector(".player2 h3").innerText =
    player2 < 9 ? `0${player2}` : player2; // updating player 2 score

  result.style.visibility = "visible";
  result.style.color = "green";
};

// calling functions on events
resetBtn.addEventListener("click", resetGame);
resetScoreBtn.addEventListener("click", resetAll);
blocks.forEach((block) =>
  block.addEventListener("click", () => {
    player = !player;
    if (player) {
      block.innerText = "⭕";
    } else {
      block.innerText = "❌";
    }
    count++;
    block.disabled = true;
    checkWinner();
  })
);
