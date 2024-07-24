document
  .getElementById("avatarForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const avatarNameElement = document.querySelector(".avatarName");
    const avatarImgElement = document.querySelector(".avatar");

    // Update the name display
    avatarNameElement.textContent = name;

    // Update the avatar image
    const apiUrl = `https://joesch.moe/api/v1/${gender}/${encodeURIComponent(
      name
    )}`;
    avatarImgElement.src = apiUrl;
    avatarImgElement.alt = `${name}'s avatar`;
  });
