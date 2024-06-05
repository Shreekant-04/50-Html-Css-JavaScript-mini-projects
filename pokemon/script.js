console.log("hello");
let offset = Number(document.querySelector(".active").innerText - 1) * 20;
let from = offset + 1;
let to = offset + 21;
console.log(from, to);
function initial() {
  for (let i = from; i <= to; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    poke(url);
  }
}

initial();

let prev = document.querySelector(".prev");
prev.addEventListener("click", (e) => {
  let pageIndex = Number(document.querySelector(".active").innerText) - 1;
  if (pageIndex > 0) {
    if (pageIndex === 1) {
      prev.setAttribute("href", `/pokemon/index.html`);
    } else {
      prev.setAttribute("href", `/pokemon/page${pageIndex}/index.html`);
    }
  }
});

let next = document.querySelector(".next");
next.addEventListener("click", (e) => {
  let pageIndex = Number(document.querySelector(".active").innerText) + 1;
  if (pageIndex <= 10) {
    next.setAttribute("href", `/pokemon/page${pageIndex}/index.html`);
  }
});
const searchUrl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302";
async function search(searchitem) {
  const res = await fetch(searchUrl);
  const data = await res.json();
  const result = await data.results;
  console.log(result);
  find(result, searchitem);
}

const form = document.querySelector(".search");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchitem = e.target[0].value;
  if (searchitem === "") {
    const lists = document.querySelector(".lists");
    lists.innerHTML = "";
    initial();
  } else {
    const lists = document.querySelector(".lists");
    lists.innerHTML = "";
    search(searchitem);
  }
});

function find(result, searchitem) {
  const d = result.filter((item) =>
    item.name.startsWith(searchitem.toLowerCase())
  );
  const fetchedUrl = d.map((d) => d.url);
  fetched(fetchedUrl);
}
function fetched(fetchedUrl) {
  fetchedUrl.forEach((element) => {
    fetchData(element);
  });
}
async function fetchData(element) {
  let res = await fetch(element);
  let data = await res.json();

  writeDivs(data);
}

async function poke(url) {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.types);

  writeDivs(data);
}

function writeDivs(data) {
  let fetchedData = data;
  const { species, sprites, types } = fetchedData;
  const lists = document.querySelector(".lists");
  let div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `
  <div class="itemimg" style=" background-image: url(${
    sprites.other.dream_world.front_default
  })">

        </div>  <p>${species.name}</p>
        <p>Type:${types.map((item) => item.type.name)}</p>

  `;
  lists.appendChild(div);
}
