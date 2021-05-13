"use strict";

let secretnumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".number").textContent = secretnumber;

let score = 20;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   when there is no input
  if (!guess) {
    document.querySelector(".massage").textContent = "No Number ";
  }
  //   when you win
  else if (guess === secretnumber) {
    document.querySelector(".massage").textContent = "you won";
    document.querySelector("body").style.backgroundColor = "#80ff00";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretnumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //   when value is high
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".massage").textContent = " too high !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".massage").textContent = "you lost the game ";
      document.querySelector(".score").textContent = 0;
    }
  }
  // when value is low
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".massage").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".massage").textContent = "you lost the game ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// again button ke liye

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".massage").textContent = "Start guessing....";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".score").textContent = score;
});
