"use strict";
let user = document.querySelector('input[name="inpuT"]');
const buttoN = document.querySelector(".js-button");
let count = 0;
let max = getRandomNumber(100);
const p1 = document.querySelector(".js-paragraph1");
const p2 = document.querySelector(".js-paragraph2");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(max);

function handlerInput() {
  let value = parseInt(user.value);
  if (value < 1 || value > 100) {
    handlerPrint("El número tiene que estar comprendido entre 1 y 100");
  } else if (value < max) {
    handlerPrint("Demasiado bajo");
  } else if (value > max) {
    handlerPrint("Demasiado alto");
  } else if (value === max) {
    handlerPrint("¡¡¡Has ganado campeona!!!");
  }
}
function handlerPrint(mesage) {
  p1.innerText = mesage;
}

function countClick() {
  count += 1;
  p2.innerText = `Número de intentos: ${count}`;
}

function handlerClick(event) {
  event.preventDefault();
  handlerInput();
  countClick();
}

buttoN.addEventListener("click", handlerClick);
