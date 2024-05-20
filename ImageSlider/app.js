// script.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const nightImage = document.querySelector(".night");

  container.addEventListener("mousemove", (e) => {
    const containerRect = container.getBoundingClientRect();
    const offsetY = e.clientY;
    const height = containerRect.height;
    const percentage = (offsetY / height) * 100;
    const color = 255 - (percentage *3.5);
    nightImage.style.clipPath = `inset(0 0 ${100 - percentage}% 0)`;
    container.style.backgroundColor = `rgb(${color},${color},${color})`;
  });
});
