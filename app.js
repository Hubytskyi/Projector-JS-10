"use strict";

const input = document.querySelector(".input");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");

const operatorsList = ["+", "-", "×", "÷", "."];
let isResultDisplayed = false;

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    const operatorValue = event.target.innerHTML;
    const inputValue = input.innerHTML;
    const lastChar = inputValue.at(-1);

    if (inputValue === "") {
      return null;
    }

    if (operatorsList.includes(lastChar)) {
      const newInputValue = inputValue.substring(0, inputValue.length - 1);
      input.innerHTML = newInputValue + operatorValue;
    } else {
      input.innerHTML += operatorValue;
    }

    isResultDisplayed = true;
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const numberValue = event.target.innerHTML;
    const inputValue = input.innerHTML;
    const lastChar = inputValue.at(-1);

    if (lastChar === "." && numberValue === ".") {
      return null;
    }

    if (!isResultDisplayed) {
      input.innerHTML += numberValue;
    } else if (isResultDisplayed && operatorsList.includes(lastChar)) {
      input.innerHTML += numberValue;
      isResultDisplayed = false;
    } else {
      input.innerHTML = numberValue;
      isResultDisplayed = false;
    }
  });
});

clear.addEventListener("click", () => {
  input.innerHTML = "";
});

result.addEventListener("click", () => {
  const inputValue = input.innerHTML;
  const lastChar = inputValue.at(-1);

  if (operatorsList.includes(lastChar)) {
    return null;
  }

  const numbersOnly = inputValue.split(/\+|\-|\×|\÷/g);
  const operatorsOnly = inputValue.replace(/[0-9]|\./g, "").split("");

  // ділення
  let dividerIndex = operatorsOnly.indexOf("÷");
  while (dividerIndex !== -1) {
    const result = numbersOnly[dividerIndex] / numbersOnly[dividerIndex + 1];

    numbersOnly.splice(dividerIndex, 2, result);
    operatorsOnly.splice(dividerIndex, 1);

    dividerIndex = operatorsOnly.indexOf("÷");
  }

  // множення
  let multiplyIndex = operatorsOnly.indexOf("×");

  while (multiplyIndex !== -1) {
    const result = numbersOnly[multiplyIndex] * numbersOnly[multiplyIndex + 1];

    numbersOnly.splice(multiplyIndex, 2, result);
    operatorsOnly.splice(multiplyIndex, 1);

    multiplyIndex = operatorsOnly.indexOf("×");
  }

  // віднімання
  let substractIndex = operatorsOnly.indexOf("-");
  while (substractIndex !== -1) {
    const result =
      numbersOnly[substractIndex] - numbersOnly[substractIndex + 1];

    numbersOnly.splice(substractIndex, 2, result);
    operatorsOnly.splice(substractIndex, 1);

    substractIndex = operatorsOnly.indexOf("-");
  }

  // додавання
  let sumIndex = operatorsOnly.indexOf("+");
  while (sumIndex !== -1) {
    const result =
      parseFloat(numbersOnly[sumIndex]) + parseFloat(numbersOnly[sumIndex + 1]);

    numbersOnly.splice(sumIndex, 2, result);
    operatorsOnly.splice(sumIndex, 1);

    sumIndex = operatorsOnly.indexOf("+");
  }

  input.innerHTML = numbersOnly[0];
  isResultDisplayed = true;
});
