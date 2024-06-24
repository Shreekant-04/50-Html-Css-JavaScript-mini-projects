// console.log("hello");

// async function fetchData() {
//   const url = "https://api.dictionaryapi.dev/api/v2/entries/en/name";
//   let response = await fetch(url);
//   let data = await response.json();
//   console.log(data);
//   setData(data);
// }
// fetchData();
// // function play(audio) {
// //   audio.load();
// //   audio.play();
// // }
// function setData(data) {
//   console.log(data[0].word);
//   let audio = new Audio(data[0].phonetics[0].audio);
//   //   let button = document.querySelector(".play");
//   //   button.addEventListener("click", () => play(audio));
//   const a = data.map((data) => {
//     return data.meanings.text();
//   });
//   console.log(a);
// }
