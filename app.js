"use strict";

// const obj1 = {
//   name: "John",
// };

// const obj2 = {
//   name2: "Jane",
// };

// const num1 = 1;
// const num2 = 2;

// const result = Math.max(num1, num1, num1, num1, num1, num2);
// console.log(result);

// const math = {
//   max: (...nums) => {
//     console.log(nums);
//   },
// };

// math.max(num1, num1, num1, num1, num1, num2);

// const obj3 = Object.assign(obj1, obj2, ...);
// console.log(obj3);

// function sumAll(...args) {
//   // args = [1, 4, 6, 6]
//   let sum = 0;

//   for (let arg of args) {
//     sum += arg;
//   }

//   return sum;
// }

// console.log(sumAll(1));
// console.log(sumAll(1, 2, 3));
// console.log(sumAll(1, 4, 6, 6));

// function myBio(firstName, lastName, ...other) {
//   console.log(arguments[0]); // не використовувати!
//   return other; // "Developer", "JS"
// }

// console.log(myBio("John", "Jane", "Developer", "JS"));
// myBio("John", "Jane", "Developer", "JS");

// const arr = [1, 2, 3, 5];
// const res = Math.max(...arr); // arr => 1,2,3,5
// console.log(res);

// const math = {
//   max: (...nums) => {
//     console.log(nums);
//   },
// };

// math.max(...arr);

// function myBio(firstName, lastName, position, stack) {
//   return `${firstName}, ${lastName}, ${position}, ${stack}`; // "Developer", "JS"
// }

// const arr = ["John", "Jane", "Developer", "JS"];
// console.log(myBio(...arr)); // "John", "Jane", "Developer", "JS"

// Lex Env

// globalLexEnv = {
//     environmentRecord: {
//         getUser: посилання на функцію
//     },
//     outer: null
// }

// function getUser(name) {
//  getUserLexEnv = {
//     environmentRecord: {
//         name: "John",
//         age: 42
//     },
//     outer: посилання на глобальний об'єкт
// }
//   const age = 42;

//   return `${name}, ${age}`;
// }

// getUser("John");

// const a = "global";

// function outer() {
//   const b = "outer";

//   function inner() {
//     const c = "inner";

//     console.log(c);
//     console.log(b);
//     console.log(a);
//   }

//   console.log(a);
//   console.log(b);

//   inner();
// }

// outer();
// console.log(a);

// шукаємо name
// const name = "John";

// function getPersonName() {
//   // шукаємо name
//   const name = "Jane";

//   return function displayName() {
//     // шукаємо name
//     console.log(name);
//   };
// }

// const person = getPersonName();
// person();
// console.log(person);

//  getCounterLexEnv = {
//     environmentRecord: {
//         count: "John",
//         anom: посилання на функцію
//     },
//     outer: посилання на глобальний об'єкт
// }

//  getCounterLexEnv = {
//     environmentRecord: {
//
//     },
//     outer: посилання на батьківську функцію
// }

// function getCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// const counter = getCounter();
// const counter1 = getCounter();
// console.log(counter);

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// let count = 0;

// function counter() {
//   return count++;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function getCounter() {
//   let count = 0;

//   return count++;
// }
// console.log(getCounter());
// console.log(getCounter());
// console.log(getCounter());

function aFunc() {}

const aSomeNum = 1;
// var aNextNum = 2;

// console.log(window);
console.log(globalThis);
