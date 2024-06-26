const crow = document.querySelectorAll(".crow");
let div = document.createElement("div");
div.style.fontSize = "calc(10px + 5vw)";
const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(div);

let count = 0;
const timer = document.querySelector(".timer");
let time = 15;
setInterval(timeOver, 1000);
function timeOver() {
  if (time > 0) {
    time--;
    timer.innerText = `${time}s`;
  }
  if (count === 6) {
    timer.innerText = "0s";
  }
}

crow.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.style.display = "none";
    count++;
    document.querySelector(".score").innerHTML = `<p>Score</p>
      <p>${count}</p>
      `;
    over(); // Check if game is over after each click
  });
});

function over() {
  if (count === 6) {
    div.innerText = "win";
    wrapper.style.animation = "none";
    timeOver();
  }
}

// Timeout function to end the game after 5 seconds
setTimeout(() => {
  if (count <= 5) {
    div.innerText = "Game Over";
    wrapper.style.animation = "none";
  }
  crow.forEach((el) => {
    el.style.display = "none"; // Hide all crow elements
  });
}, 15000);
