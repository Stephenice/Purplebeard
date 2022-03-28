"use strict";

const password = "stephen";

if (password === "stephen") {
  console.log(true);
} else {
  console.log(false);
}

// 2
const heightTest = 150;

if (heightTest >= 150) {
  console.log("You can go on the ride");
} else if (heightTest < 150) {
  console.log("Sorry you are not tall enough");
} else {
  console.log("Please enter a number");
}

//3
const dice1 = Math.floor(Math.random() * 6 + 1);
const dice2 = Math.floor(Math.random() * 6 + 1);
console.log(dice1, dice2);
