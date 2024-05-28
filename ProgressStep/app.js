const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
update();

//star rating
const stars = document.querySelectorAll(".star-wrapper span");
console.log(stars);
let state = false;
stars.forEach((star) => {
  console.log(star);
  star.addEventListener("click", (e) => {
    starcolor(e);
  });
});
const wrapper = document.querySelector("star-wrapper");
function starcolor(e) {
  let c = 5;
  for (let i = 0; i < c; i++) {
    stars[i].style.color = "black";
  }
  let a = e.target.id;
  console.log(a);
  let b;
  switch (a) {
    case "star1":
      b = 1;
      break;
    case "star2":
      b = 2;
      break;
    case "star3":
      b = 3;
      break;
    case "star4":
      b = 4;
      break;
    case "star5":
      b = 5;
      break;
  }
  console.log(b);
  for (let i = 0; i < b; i++) {
    stars[i].style.color = "orange";
  }
}
