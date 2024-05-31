function bmiCal() {
  let height = document.querySelector(".height").value;
  let mass = document.querySelector(".weight").value;
  let result_msg = document.querySelector("#bmi-msg");
  let healthyWeight = document.querySelector(".weight-range");
  let resultDiv=document.querySelector(".resultdiv");

  resultDiv.style.visibility = "visible";


  let heightM = height / 100;

  if (isNaN(mass) || isNaN(height) || mass <= 0 || height <= 0) {
    document.getElementById("bmi-msg").innerHTML =
      "Please enter valid weight and height.";
    return;
  }
  let bmi = mass / heightM ** 2;
  let result = bmi.toFixed(1);
  result_msg.innerText = `BMI = ${result}`;
  healthyWeight.innerText = `Healthy weight for the height: ${calculateHealthyWeightRange(
    height
  )}`;

  bmiPrime(bmi);
  ponderalIndex(mass, heightM);
}
const bmiPrime = (bmi) => {
  let bmiPrime = document.querySelector(".bmi-prime");
  bmiPrime.innerText = `BMI Prime -${(bmi / 25).toFixed(2)} `;
};
const ponderalIndex = (mass, heightM) => {
  let pi = document.querySelector(".ponderal-index");
  pi.innerText = `Ponderal Index: ${(mass / heightM ** 3).toFixed(1)} `;
};

const originalContent = document.querySelector(".weight-range").innerHTML;
console.log(originalContent);
let resetVal = document.querySelector(".reset-btn");
resetVal.addEventListener("click", ()=>{
    document.querySelector(".height").value = "";
  document.querySelector(".weight").value = "";
  document.querySelector(".age").value = "";
  document.querySelector("#bmi-msg").innerText = "";
  let resultDiv=document.querySelector(".resultdiv");
  document.querySelector(".weight-range").innerHTML = originalContent;
  resultDiv.style.visibility = "hidden";
});

function calculateHealthyWeightRange() {
  let height = document.querySelector(".height").value / 100;

  var lowerBMI = 18.5;
  var upperBMI = 25;

  var lowerWeight = lowerBMI * height * height;
  var upperWeight = upperBMI * height * height;

  return [`${lowerWeight.toFixed(1)}Kg - ${upperWeight.toFixed(1)}Kg`];
}

//to show calculated value of bmi of default value
let bmiMsg = document.querySelector("#bmi-msg");
bmiMsg.value = bmiCal();
