// script.js
function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthBar = document.getElementById("strength-bar");

  let strength = 0;

  if (password.length > 5) strength++;
  if (password.length > 7) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  const strengthPercentage = (strength / 5) * 100;
  strengthBar.style.width = strengthPercentage + "%";

  if (strength < 2) {
    strengthBar.style.backgroundColor = "red";
  } else if (strength < 4) {
    strengthBar.style.backgroundColor = "orange";
  } else {
    strengthBar.style.backgroundColor = "green";
  }
}
