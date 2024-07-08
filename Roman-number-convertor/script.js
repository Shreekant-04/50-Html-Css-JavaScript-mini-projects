document.querySelector(".container").addEventListener("submit", function (e) {
  e.preventDefault();
  const number = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (number === "") {
    output.textContent = "Please enter a valid number";
    output.style.color = "red";
    output.style.visibility = "visible";
    return;
  }

  const num = parseInt(number);

  if (isNaN(num) || num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.style.color = "red";
    output.style.visibility = "visible";

    return;
  }

  if (num >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.style.color = "red";
    output.style.visibility = "visible";

    return;
  }

  output.textContent = convertToRoman(num);
  output.style.color = "black";
  output.style.fontWeight = "800";
  output.style.visibility = "visible";
});

function convertToRoman(num) {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";

  for (const [roman, value] of romanNumerals) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}
