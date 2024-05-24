console.log("hello");
let image = document.querySelector("section");
console.log(image);

image.addEventListener("dblclick", (e) => {
  e.preventDefault();
  image.innerHTML =
    '  <img src="/doubleClickEvent/heart.png" class="heartpop" />';
  setTimeout(() => {
    image.innerHTML = " ";
  }, 800);
});
