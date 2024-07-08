document
  .getElementById("check-btn")
  .addEventListener("click", validatePhoneNumber);
document.getElementById("clear-btn").addEventListener("click", clearResults);

function validatePhoneNumber() {
  const input = document.getElementById("user-input").value.trim();
  const resultsDiv = document.getElementById("results-div");

  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  const valid = isValidIndianPhoneNumber(input);
  if (valid) {
    resultsDiv.textContent = `Valid Indian number: ${input}`;
    resultsDiv.style.color = "green";
  } else {
    resultsDiv.textContent = `Invalid Indian number: ${input}`;
    resultsDiv.style.color = "red";
  }
}

function clearResults() {
  document.getElementById("results-div").textContent = "";
  document.getElementById("user-input").value = "";
}

function isValidIndianPhoneNumber(phone) {
  const patterns = [
    /^\d{10}$/, // 10 digits
    /^0\d{10}$/, // 11 digits starting with 0
    /^91\d{10}$/, // 12 digits starting with 91
    /^\+91\d{10}$/, // 13 digits starting with +91
  ];

  return patterns.some((pattern) => pattern.test(phone));
}
