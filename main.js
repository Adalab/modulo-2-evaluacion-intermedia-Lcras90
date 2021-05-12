"use strict";
let user = document.querySelector('input[name="inpuT"]');
const buttoN = document.querySelector(".js-button");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(getRandomNumber(100));

function handlerInput(event) {
  let value = user;
  if (value < getRandomNumber(max)) {
    const p1 = document.querySelector(".js-paragraph1");
    p1.innerText = "Demasiado bajo";
  } else if (value > getRandomNumber(max)) {
    p1.innerText = "Demasiado alto";
  } else if (value === getRandomNumber(max)) {
    p1.innerText = "¡¡¡Has ganado campeona!!!";
  }
}

buttoN.addEventListener("click", handlerInput);
