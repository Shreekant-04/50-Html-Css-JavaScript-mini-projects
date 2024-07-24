let qrContentInput = document.getElementById("qr-content");
let qrGenerationForm = document.getElementById("qr-generation-form");
let qrCodeContainer = document.getElementById("qr-code");
let qrCode;
let clear = document.querySelector(".clear");

function generateQrCode(qrContent) {
  qrCodeContainer.innerHTML = "";
  let canvas = document.createElement("canvas");
  canvas.width = 280;
  canvas.height = 280;
  let ctx = canvas.getContext("2d");

  // Draw the background color
  ctx.fillStyle = "#ffffff"; // Set your desired background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Generate the QR code and draw it on the canvas
  qrCode = new QRCode(document.createElement("div"), {
    text: qrContent,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Wait until the QR code is generated and then draw it on the canvas
  setTimeout(() => {
    let qrCanvas = qrCode._oDrawing._elCanvas;

    // Calculate the position to center the QR code
    let x = (canvas.width - 256) / 2;
    let y = (canvas.height - 256) / 2;

    // Draw the QR code at the calculated position
    ctx.drawImage(qrCanvas, x, y);

    // Convert the canvas to a Data URL
    const dataUrl = canvas.toDataURL("image/png");

    // Update the href attribute of the <a> tag
    const link = document.getElementById("open-data-url");
    link.setAttribute("href", dataUrl);
    link.textContent = "View QR Code in New Tab";
  }, 100);

  // Append the canvas to the QR code container
  qrCodeContainer.appendChild(canvas);
}

// Event listener for form submit event
qrGenerationForm.addEventListener("submit", function (event) {
  // Prevent form submission
  event.preventDefault();
  let qrContent = qrContentInput.value;
  generateQrCode(qrContent);
});

// Function to clear the QR code
function clearQrCode() {
  qrCodeContainer.innerHTML = ""; // Clear the QR code container
}

// Event Listener to clear the QR code
clear.addEventListener("click", clearQrCode);
