console.log("hello");
let button = document.querySelector(".view");
let card = document.querySelector(".card-detail");
let valid = document.querySelector(".valid");
let cvv = document.querySelector(".cvv");
let show = false;
button.addEventListener("click", () => {
  show = !show;
  console.log(show);
  if (show) {
    card.innerText = "4594 0000 1234 8989";
    valid.innerText = "05/30";
    cvv.innerText = "000";
  }else{
    card.innerText = "4594 **** **** ****";
    valid.innerText = "**/**";
    cvv.innerText = "***";

  }
});
