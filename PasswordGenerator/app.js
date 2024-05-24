console.log("hello");
const length = document.querySelector("#length");
const lengthInput = document.querySelector("#num");
let passwordLength;
// loading dom content on refresh
document.addEventListener("DOMContentLoaded", (event) => {
  passwordLength = length.value;
  lengthInput.value = passwordLength;
  generatePassword();
});
//to change length input value by range slider

length.addEventListener("input", (event) => {
  let val = event.target.value;
  lengthInput.value = val;
  passwordLength = lengthInput.value;
  generatePassword();
});

let isUpper = false;
let isNumber = false;
let isSymbol = false;

// accessing uppercase letters
let uppercase = document.querySelector("#uppercase");
uppercase.addEventListener("change", () => {
  if (uppercase.checked) {
    isUpper = true;
  } else {
    isUpper = false;
  }
  pushUpper();
});

// accessing symbols
let symbol = document.querySelector("#special-char");
symbol.addEventListener("change", (e) => {
  if (symbol.checked) {
    isSymbol = true;
  } else {
    isSymbol = false;
  }
  pushSymbols();
});
// acessing numbers
let number = document.querySelector("#number");
number.addEventListener("change", () => {
  if (number.checked) {
    isNumber = true;
  } else {
    isNumber = false;
  }
  pushNumbers();
});

const upper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "@", "#", "%", "&", "*", "/", "_"];
const lowerCase = [..."abcdefghijklmnopqrstuvwxyz"];
let letters = [];
lowerCase.forEach((element) => {
  letters.push(element);
});
//adding and deletin uppercase value on event listener
const pushUpper = () => {
  if (isUpper) {
    upper.forEach((el) => {
      letters.push(el);
    });
  } else {
    let remVal;
    upper.forEach((element) => {
      remVal = element;
      if (letters.includes(remVal)) {
        letters.splice(letters.indexOf(remVal), 1);
      }
    });
  }
  generatePassword();
};
//adding and deletin symbols value on event listener
const pushSymbols = () => {
  if (isSymbol) {
    symbols.forEach((el) => {
      letters.push(el);
    });
  } else {
    let remVal;
    symbols.forEach((element) => {
      remVal = element;
      if (letters.includes(remVal)) {
        letters.splice(letters.indexOf(remVal), 1);
      }
    });
  }
  generatePassword();
};

//adding and deletin uppercase value on event listener
const pushNumbers = () => {
  if (isNumber) {
    numbers.forEach((el) => {
      letters.push(el);
    });
  } else {
    let remVal;
    numbers.forEach((element) => {
      remVal = element;
      if (letters.includes(remVal)) {
        letters.splice(letters.indexOf(remVal), 1);
      }
    });
  }
  generatePassword();
};

const password = document.querySelector("#pass");

const generatePassword = () => {
  let rawPassword = [];
  for (i = 0; i < passwordLength; i++) {
    let random = Math.floor(Math.random() * letters.length);
    rawPassword.push(letters[random]);
  }
  let finallPassword = "";
  rawPassword.forEach((el) => {
    finallPassword += el;
  });
  password.value = finallPassword;
};

//copying password
function copyText() {
  // Get the text field
  let copyText = document.getElementById("pass");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
const copySpan = document.querySelector(".copy-text");
copySpan.addEventListener("click", () => {
  copyText();
  pop();
});
const btn = document.querySelector(".copy");
btn.addEventListener("click", () => {
  copyText();
  pop();
});
const refresh = document.querySelector(".refresh");
refresh.addEventListener("click", generatePassword);

const wrapper = document.querySelector(".wrapper");
function pop() {
  let div = document.createElement("div");
  div.classList.add("pop");
  wrapper.appendChild(div);
  div.innerText = "Copied !";
  setTimeout(() => {
    div.remove();
  }, 3050);
}
const passDiv = document.querySelector("#password");

password.addEventListener("input", () => {
  let length = password.value.length;
  if (length == 0) {
    passDiv.style.setProperty("--aaa", "0%");
  } else if (length <= 3) {
    passDiv.style.setProperty("--after", "red");
    passDiv.style.setProperty("--aaa", "33%");
  } else if (length <= 5) {
    passDiv.style.setProperty("--after", "orangered");
    passDiv.style.setProperty("--aaa", "67%");
  } else {
    passDiv.style.setProperty("--after", "green");
    passDiv.style.setProperty("--aaa", "100%");
  }
});
