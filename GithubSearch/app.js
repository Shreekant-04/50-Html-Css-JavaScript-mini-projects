console.log("hello");
// Replace 'your_token_here' with your personal access token
const token = "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";
const headers = new Headers({
  Authorization: `token ${token}`,
});

async function checkRateLimit() {
  try {
    const response = await fetch("https://api.github.com/rate_limit", {
      headers,
    });
    const rateLimit = await response.json();
    const core = rateLimit.rate;
    const resetTime = new Date(core.reset * 1000);
  } catch (error) {
    console.error("Error fetching rate limit:", error);
  }
}

checkRateLimit();

const nav = document.querySelectorAll("nav a");
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
  checkRateLimit();

  let search = await fetch(url, { headers });
  let data = await search.json();
  let fetchRepo = await fetch(repo, { headers });
  let repos = await fetchRepo.json();
  fetchedData(search, data, repos);
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
        txt = "404 User Not found Check the username and try again";
        break;
    }
    h1.innerText = `Status:${(search.status, txt)}! `;
    document.querySelector("body").append(h1);
  }
}
function deleteH1() {
  let hTag = document.querySelector(".notfound");
  if (hTag) {
    hTag.remove();
  }
}

function deletePrevious() {
  let reposDiv = document.querySelectorAll(".repos div");
  reposDiv.forEach((el) => {
    el.remove();
  });
}
