console.log("hello");
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("#text");
let result = document.querySelector(".result");

let str = "";
let displayStr = "";
buttons.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (
      el.innerText === "=" ||
      el.innerText === "Ac" ||
      el.innerText === "C" ||
      el.innerText === "%"
    ) {
      handleEvent(e);
    } else {
      str += el.innerText;
      displayStr += el.innerText;
      calculate(str, displayStr);
    }
  });
});

function calculate(str, displayStr) {
  let rawResult = String(str);
  input.value = displayStr;
  let end = rawResult.charAt(rawResult.length - 1);
  if (end === "/" || end === "+" || end === "*" || end === "-") {
    return;
  } else {
    if (rawResult === "") {
      result.value = 0;
    } else {
      result.value = eval(rawResult);
    }
  }
}
function handleEvent(e) {
  const val = e.target.innerText;
  switch (val) {
    case "Ac":
      str = "";
      displayStr = "";
      break;
    case "C":
      str = str.slice(0, -1);
      displayStr = displayStr.slice(0, -1);

      break;
    case "%":
      displayStr += e.target.innerText;
      str += "*1/100";

      break;
    default:
      displayStr = "";
      break;
  }
  calculate(str, displayStr);
}
