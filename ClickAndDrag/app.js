const slider = document.querySelector(".container");
let isDown = false;
let startX;
let scrollLeft;

for (let i = 1; i <= 31; i++) {
  let div = document.createElement("div");
  div.classList.add("slide");
  div.innerHTML = `
    <img src="/SwipperJs/images/1 (${i}).jpg" />
    `;
  slider.appendChild(div);
}

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.style.cursor = "grabbing";
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.style.cursor = "pointer";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});
