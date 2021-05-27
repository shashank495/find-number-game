"use strict";

let randomNumber = Math.trunc(Math.random() * 50 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".guessing").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  let number = Number(document.querySelector(".number").value);
  console.log(typeof number, number);

  // When there is no input
  if (!number) {
    displayMessage("⛔ Please Enter a Number");
    // When Player wins the game
  } else if (number === randomNumber) {
    displayMessage("🎊 Correct Number");
    document.querySelector("body").style.backgroundColor = "#76b852";

    document.querySelector(".question").style.padding = "0px 90px";
    document.querySelector(".question").textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }

    //if input is wrong
  } else if (number !== randomNumber) {
    if (score > 1) {
      displayMessage(number > randomNumber ? "📈 High" : "📉 Low");
      score--;
      document.querySelector(".your-score").textContent = score;
    } else {
      displayMessage("👎 You lost The Game");
      document.querySelector(".your-score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#e53935";

      document.querySelector(".question").textContent = randomNumber;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 50 + 1);

  displayMessage("Start Guessing...");
  document.querySelector(".your-score").textContent = score;
  document.querySelector(".question").textContent = "?";
  document.querySelector(".number").value = "";
  document.querySelector("body").style.backgroundColor = "#4b79a1";
  // document.querySelector('body').style.backgroundImage = 'url("skies.jpg")';

  document.querySelector(".question").style.padding = "0px 45px";
});
