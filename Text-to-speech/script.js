document.addEventListener("DOMContentLoaded", () => {
  const synth = window.speechSynthesis;
  const textInput = document.getElementById("textInput");
  const voiceSelect = document.getElementById("voiceSelect");
  const pitch = document.getElementById("pitch");
  const pitchValue = document.getElementById("pitch-value");
  const volume = document.getElementById("volume");
  const volumeValue = document.getElementById("volume-value");
  const rate = document.getElementById("rate");
  const rateValue = document.getElementById("rate-value");
  const speakButton = document.getElementById("speakButton");
  const errorMessage = document.getElementById("errorMessage");

  let voices = [];

  const populateVoiceList = () => {
    voices = synth.getVoices();
    voiceSelect.innerHTML = "";
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
    console.log(voices);

  };

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const speak = () => {
    if (synth.speaking) {
      errorMessage.textContent = "Already speaking...";
      return;
    }
    if (textInput.value !== "") {
      const utterThis = new SpeechSynthesisUtterance(textInput.value);
      const selectedOption =
        voiceSelect.selectedOptions[0].getAttribute("data-name");
      voices.forEach((voice) => {
        if (voice.name === selectedOption) {
          utterThis.voice = voice;
        }
      });
      utterThis.pitch = pitch.value;
      utterThis.volume = volume.value;
      utterThis.rate = rate.value;
      synth.speak(utterThis);
      utterThis.onend = () => {
        errorMessage.textContent = "";
      };
      utterThis.onerror = (e) => {
        errorMessage.textContent = `An error occurred: ${e.error}`;
      };
    } else {
      errorMessage.textContent = "Please enter some text.";
    }
  };

  speakButton.addEventListener("click", speak);
  pitch.addEventListener("input", () => {
    pitchValue.textContent = pitch.value;
  });
  volume.addEventListener("input", () => {
    volumeValue.textContent = volume.value;
  });
  rate.addEventListener("input", () => {
    rateValue.textContent = rate.value;
  });
});
