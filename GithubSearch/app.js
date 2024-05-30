console.log("hello");
const nav = document.querySelectorAll("nav a");
console.log(nav);
nav.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    removeClass();
    el.classList.add("active");
  });
});
function removeClass() {
  nav.forEach((el) => {
    el.classList.remove("active");
  });
}

// Fetchind data on input event
let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  let value = document.getElementById("username").value;
  let user = value;
  const url = `https://api.github.com/users/${user}`;
  const repo = `https://api.github.com/users/${user}/repos`;
  searchprofile(url, repo);
});

async function searchprofile(url, repo) {
  let search = await fetch(url);
  let data = await search.json();
  let fetchRepo = await fetch(repo);
  let repos = await fetchRepo.json();
  console.log(search);

  fetchedData(search, data, repos);

  console.log(search, fetchRepo);
}

function fetchedData(search, data, repos) {
  if (search.ok) {
    deleteH1();
    let profile = document.querySelector(".photo");
    profile.style.backgroundImage = `url(${data.avatar_url})`;
    document.querySelector(".name").innerText = data.name;
    document.querySelector(".bio").innerText = data.bio;
    document.querySelector(".follow-following").innerHTML = `
    <p class="cont">${data.followers}<span>Follower</span></p>
            <p class="cont">${data.following}<span>Following</span></p>
    `;
    document.querySelector(".location").innerText = data.location;
    document.querySelector(".label-repo").innerHTML = `
    Repositories <span>${data.public_repos}</span>
    `;
    let reposDiv = document.querySelector(".repos");
    deletePrevious();
    repos.forEach((el) => {
      let div = document.createElement("div");
      div.innerText = el.name;
      reposDiv.appendChild(div);
    });
    document.querySelector(".content-wrapper").style.display = "flex";
  } else {
    document.querySelector(".content-wrapper").style.display = "none";
    deleteH1();
    let h1 = document.createElement("h1");
    h1.classList.add("notfound");
    let txt;
    switch (search.status) {
      case 403:
        txt = "Forbidden";
        break;
      default:
        txt = "user Not found Check the username and try again";
        break;
    }
    h1.innerText = `Status:${search.status,txt}! check the username and try again`;
    document.querySelector("body").append(h1);
  }
}
function deleteH1() {
  let hTag = [document.querySelector(".notfound")];
  if (hTag.length === 1) {
    hTag[0].remove();
  }
}

function deletePrevious() {
  let reposDiv = document.querySelectorAll(".repos div");
  reposDiv.forEach((el) => {
    el.remove();
  });
}
