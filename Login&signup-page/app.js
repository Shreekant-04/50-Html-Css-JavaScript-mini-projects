let checkBox = document.querySelector("#trans");
let overlay = document.querySelector(".overlay");
checkBox.addEventListener("change", () => {
  setTimeout;
  if (checkBox.checked) {
    setTimeout(() => {
      overlay.innerHTML = `<h1>Welcome to the family! </h1>
    <p class="sign">
      Already have an Account?
      <label for="trans" class="button">Sign In</label>
    </p>`;
    }, 200);
  } else {
    setTimeout(() => {
      overlay.innerHTML = `
        <h1>Welcome back!</h1>
                <p class="sign">
                  Dont't have an Account?
                  <label for="trans" class="button">Sign Up</label>
                </p>  `;
    }, 200);
  }
});
