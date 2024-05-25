let digitaClock = document.querySelector(".digital-clock");

const body = document.querySelector("body"),
  hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second"),
  modeSwitch = document.querySelector(".mode-switch");
const updateTime = () => {
  // Get current time and calculate degrees for clock hands
  let date = new Date(),
    secToDeg = (date.getSeconds() * 6),
    minToDeg = (date.getMinutes() * 6) ,
    hrToDeg = (30* date.getHours()+ date.getMinutes()/2) ;
  // Rotate the clock hands to the appropriate degree based on the current time
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;

  //digital clock
  let clock = date.toLocaleTimeString();
  digitaClock.innerHTML = clock;
};
// call updateTime to set clock hands every second
setInterval(updateTime, 1000);
//call updateTime function on page load
updateTime();
