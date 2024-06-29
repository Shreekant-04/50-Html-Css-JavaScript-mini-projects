console.log("hello");
const rating = document.querySelectorAll(".rating");
rating.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    rating.forEach((el) => el.classList.remove("active"));
    element.classList.add("active");
  });
});
const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submitted");
  let msg = document.querySelector(".feed-form");
  msg.innerHTML = `
        <h2 class="feed-change">
          Thank you for your valuable feedback. Your insights are appreciated
          and will help improve my work. I truly value your support💖.
        </h2>

  `;
});
