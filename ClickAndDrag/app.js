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
document.querySelector("body").addEventListener("mousedown", (e) => {
  e.preventDefault();
});

slider.addEventListener("mousedown", (e) => {
  e.preventDefault();

  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing";
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk / 2;
  });
});
slider.addEventListener("mouseup", (e) => {
  e.preventDefault();
  slider.style.cursor = "pointer";
  isDown = false;
});

document.querySelector(".slide").addEventListener("click", (e) => {
  e.preventDefault();
});
