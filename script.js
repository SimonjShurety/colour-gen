"use strict";

const colourBtn = document.querySelector(".colour-btn");

const hexBtn = document.querySelector(".hex-btn");
console.log(hexBtn);

const backgroundColorHexCode = generateRandomColor();

//random color will be freshly served
function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Logs the hex code and writes it
console.log(generateRandomColor());
hexBtn.textContent = generateRandomColor();

colourBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = generateRandomColor();
});

// When you click the label
hexBtn.addEventListener("click", function () {
  // Copies To Clipboard
  navigator.clipboard.writeText(backgroundColorHexCode);
  alert("Copied!");
});
