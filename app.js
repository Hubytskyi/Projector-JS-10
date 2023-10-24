"use strict";

// function hello(message, number) {
//   // те що отримуємо - це параметри
//   console.log(message, number);
// }

// hello("Привіт!", 10); // те що передаємо - це аргумент
// hello("Hello!");

// function showMessage(name = "незнайомець") {
//   console.log(`Вітаю, ${name}`);
// }

// showMessage("Андрій");

// function sum(a, b) {
//   return a + b;
// }

// const result = sum(3, 3);
// console.log(result);

// function calc(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }

//   return;
// }

// const result1 = calc(2, 2);
// const result2 = calc(2, "3");

// console.log("result1: ", result1);
// console.log("result2: ", result2);
// showUserFullName("John", "Doe");

// function showUserFullName(firstName, lastName) {
//   //   console.log(firstName + " " + lastName);
//   console.log(`${firstName} ${lastName}`);
// }

// function getUserFullName(firstName, lastName) {
//   //   console.log(firstName + " " + lastName);
//   return `${firstName} ${lastName}`;
// }

// showUserFullName("John", "Doe");

// console.log(getUserFullName("John", "Doe"));

// const sum = (a, b) => {
//   return a + b;
// };

// const sum2 = (a, b) => a + b; // return не потрібно

// const sum3 = () => 4 + 5;
// const hello = (message) => console.log(message);
// якщо один аргумент в стрілочнох функції, дужки можна прибрати

// console.log(sum2(2, 2));
// console.log(sum3());
// hello("hello");

// function greetingAlert(name) {
//   alert(`Hello ${name}`);
// }

// function greetingConsole(name) {
//   console.log(`Hello ${name}`);
// }

// function processUserInput(callback) {
//   // callback = greetingAlert
//   const name = prompt("Введіть своє ім'я");
//   callback(name); // greetingAlert(name)
// }

// processUserInput(greetingAlert);
// processUserInput(greetingConsole);

// function showResult(user) {
//     console.log(user)
// }

// function handleError(err) {
//     console.log('Щось пішло не так', err)
// }

// function handleResult(resolve, reject) {
//     const response = ...
//     if (response) {
//         resolve(response)
//     }  else {
//         reject('щось пішло не так')
//     }
// }

// handleResult(showResult, handleError)

function pow(x, n) {
  console.log("x: ", x);
  console.log("n: ", n);
  if (n === 1) {
    return x;
  }

  return x * pow(x, n - 1);
}

console.log(pow(2, 3));
