const toastNotification = document.querySelector(".toast-Notification");

const toast = () => {
  let div = document.createElement("div");
  div.classList.add("msgSent");
  toastNotification.appendChild(div);
  div.innerHTML = `<span class="material-symbols-outlined"> check_circle </span> Message Sent!`;
  removeToast(div);
};

const removeToast = (div) => {
  setTimeout(() => {
    div.remove();
  }, 5100);
};

//checking if cart and form has value and displaying popup
const btn = document.querySelector(".send");
btn.addEventListener("click", () => {
  const bookForm = document.querySelector("#form");
  const inputs = bookForm.querySelectorAll("input");
  function hasValue() {
    for (let input of inputs) {
      if (input.value.trim() !== "") {
        return true;
      }
    }
    return false;
  }
  if (hasValue()) {
    bookForm.submit();
  } else {
    event.preventDefault();
    fillForm();
  }
});
//unfilled  form pop
function fillForm() {
  let div = document.createElement("div");
  div.classList.add("msg-not-sent");
  toastNotification.appendChild(div);
  div.innerHTML = `<span class="material-symbols-outlined"> info </span> Please fill the form`;
  removeToast(div);
}
const bookForm = document.querySelector("#form");
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "default_service";
  const templateID = "template_o4hx855";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      toast();
      this.reset();
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});
