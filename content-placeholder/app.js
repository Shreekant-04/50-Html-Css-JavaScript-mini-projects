const placeholder = document.querySelector(".placeholder");
const content = document.querySelector(".content");

function change() {
  placeholder.style.display = "none";
  content.style.visibility = "visible";
}
setInterval(change, 5000);
