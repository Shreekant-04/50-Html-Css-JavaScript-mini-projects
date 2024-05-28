console.log("hello");
let toggle = document.getElementById("toggle");
let body = document.querySelector("body");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    console.log("success");
    body.style.backgroundColor = "black";
    body.style.color = "white";
  
  } else {
    console.log("off");
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});

const commentBtn = document.querySelector(".comment-span");
const comment = document.querySelector(".comments-wraper");

commentBtn.addEventListener("click", () => {
  addComment();
});

function addComment() {
  let div = document.createElement("div");
  div.classList.add("comments");
  div.innerHTML = `
    <div class="user">User ~</div>
    <div class="comment">
      <input type="text" class="comment-input" >
      <a href="#" class="reply">Reply</a>
    </div>`;
  comment.prepend(div);
  addReplyListeners();
  addInputListeners();
  div.querySelector(".comment-input").focus(); // Set focus to the new input
}

function addReplyListeners() {
  const reply = document.querySelectorAll(".reply");
  reply.forEach((el) => {
    el.removeEventListener("click", handleReplyClick); // Prevent duplicate event listeners
    el.addEventListener("click", handleReplyClick);
  });
}

function addInputListeners() {
  const inputs = document.querySelectorAll(".comment-input");
  inputs.forEach((input) => {
    input.addEventListener("keydown", handleInputKeydown);
  });
}

function handleReplyClick(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  let el = event.target;
  nestCmt(el);
}

function handleInputKeydown(event) {
  if (event.key === "Enter") {
    event.target.setAttribute("readonly", "true");
  }
}

function nestCmt(el) {
  let nest = document.createElement("div");
  nest.classList.add("nest-cmt");
  nest.innerHTML = `
    <input type="text" class="comment-input" >
    <a href="#" class="reply">Reply</a>`;
  el.parentNode.append(nest);
  addReplyListeners();
  addInputListeners();
  nest.querySelector(".comment-input").focus(); // Set focus to the new input
}

// Initialize reply listeners for any existing replies on page load
addReplyListeners();
addInputListeners();
