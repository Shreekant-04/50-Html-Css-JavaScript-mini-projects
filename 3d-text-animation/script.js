// JavaScript to dynamically create and insert HTML tags using a for loop
const boxElement = document.getElementById('animatedBox');

for (let i = 1; i <= 10; i++) {
  const span = document.createElement('span');
  span.style.setProperty('--i', i);
  span.innerHTML = "<i>Upskill's</i> Dev <i>club</i>";
  boxElement.appendChild(span);
}
