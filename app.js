"use strict";

// function one() {
//   let sum = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     sum += i;
//   }

//   two();
//   console.log(sum);
//   return sum;
// }

// function two() {
//   let sum = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.time();
// console.log("before call");
// // one();
// setTimeout(one);
// console.log("between call");
// console.log("after call");
// console.timeEnd();

// function outer() {
//   console.log("outer");

//   function inner() {
//     console.log("inner");
//   }

//   inner();
// }

// outer();

// []
// ["outer"]
// ["outer", "inner"]
// ["outer", "inner", "log"]
// ["outer", "inner"]
// ["outer"]
// []

// function main() {
//   setTimeout(function greet() {
//     console.log("Hello");
//   }, 2000);

//   console.log("Bye!");
// }

// main();

const result = fetch("http://localhost:3000/api/users"); // '[{id: 1, name: '}]'
result.json(); // [{id: 1, name: '}]

// /api/setUser
// /api/getUsers

// GET /api/users - отримання масиву користувачів
// POST /api/users
// PUT/PATCH (UPDATE) /api/users/1
// DELETE /api/users/1

setTimeout(() => {
  console.log("setTimeout");
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("click");
  setTimeout(() => {
    console.log("setTimeout click");
  });
});
