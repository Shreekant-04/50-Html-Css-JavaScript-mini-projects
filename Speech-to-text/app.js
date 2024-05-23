const convert = document.querySelector(".convert");
convert.addEventListener("click", () => {
  let speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript);
    let textbox = document.querySelector("#text-box");
    textbox.innerHTML = transcript;
  });
  if (speech == true) {
    recognition.start();
  }
});
