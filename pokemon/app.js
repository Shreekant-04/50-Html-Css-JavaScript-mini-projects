console.log("hello");

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
    console.log("dont");
  } else {
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

function writeDivs(data) {
  let fetchedData = data;
  const { species, sprites, types } = fetchedData;
  const lists = document.querySelector(".lists");
  let div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `
    <img class="itemimg" src='${sprites.other.dream_world.front_default}'/>

            <p>${species.name}</p>
          <p>${types.map((item) => item.type.name)}</p>

    `;
  lists.appendChild(div);
}
