const baseUrl = "https://latest.currency-api.pages.dev/v1/currencies/";
const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector(".convert-button");

let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let amount = document.querySelector(".get-info input");
let resultDiv = document.querySelector(".result-div");

let result = document.querySelector(".result-msg");
let swap = document.querySelector(".swap");
let msg = document.querySelector(".unit-msg p");
let symbolDiv = document.querySelector(".sign");

const updateSymbol = () => {
  let symbol = currency;
  let currSymbol = fromCurr.value;
  let finalSymbol;
  for (let code in symbol) {
    if (code === currSymbol) {
      finalSymbol = currency[code];
    }
  }
  symbolDiv.innerText = finalSymbol;
};

// adding dropdown Values

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.values = currCode;
    if (select.name == "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name == "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
  updateSymbol();
}
swap.addEventListener("click", () => {
  let fromImg = document.querySelector(".from-img");
  let toImg = document.querySelector(".to-img");
  [fromCurr.value, toCurr.value] = [toCurr.value, fromCurr.value];
  let newFromImg = `https://flagsapi.com/${
    countryList[fromCurr.value]
  }/flat/64.png`;
  let newToImg = `https://flagsapi.com/${
    countryList[toCurr.value]
  }/flat/64.png`;
  fromImg.src = newFromImg;
  toImg.src = newToImg;
  convert();
  updateSymbol();
});

const updateFlag = (element) => {
  let currCode = element.value;
  console.log(currCode);
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
  updateSymbol();
};
btn.addEventListener("click", () => {
  if (true) {
    convert();
  }
});
const convert = async () => {
  let amount = document.querySelector(".get-info input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = 1;
  }
  //fetching value
  let finalFrom = fromCurr.value.toLowerCase();
  let finalTo = toCurr.value.toLowerCase();

  const URL = `${baseUrl}/${finalFrom}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[finalFrom];
  let finalRate = rate[finalTo].toFixed(3);
  let finalAmount = (amount.value * finalRate).toFixed(3);
  resultDiv.innerText = `${amount.value} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  updateMsg(finalRate);
};

const updateMsg = (finalRate) => {
  msg.innerText = `1 ${fromCurr.value} = ${finalRate} ${toCurr.value}`;
  msg.style.visibility = "visible";
};
convert();
