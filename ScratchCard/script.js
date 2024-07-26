const canvas = document.getElementById("scratchCard");
const ctx = canvas.getContext("2d");
const message = document.getElementById("message");

const init = () => {
  ctx.fillStyle = "#888";
  ctx.fillRect(0, 0, 300, 200);
};
init();

let isDrawing = false;

function draw(x, y) {
  if (!isDrawing) return;

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, 24, 0, Math.PI * 2, false);
  ctx.fill();
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  draw(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
  draw(e.offsetX, e.offsetY);
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
