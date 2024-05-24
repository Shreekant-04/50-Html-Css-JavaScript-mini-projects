console.log("hello");
let btn = document.querySelector(".generate");
let h1 = document.querySelector(".quotes");

btn.addEventListener("click", () => {
  quotes();
  console.log("a");
});

async function quotes() {
  let url = "https://api.adviceslip.com/advice";
  let quote = await fetch(url);
  let res = await quote.json();
  let data = res.slip.advice;
  h1.innerText = data;
}
quotes();
