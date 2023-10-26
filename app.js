"use strict";

// const stack = ["HTML", "CSS", "JS"];
// console.log(stack[0]);
// console.log(stack);

// stack[1] = "SCSS";
// console.log(stack);
// stack[3] = "React";
// console.log(stack);
// stack[10] = "React";
// console.log(stack[4]);
// console.log(stack);
// console.log(stack.length);

// console.log(stack[stack.length - 1]);
// console.log(stack.at(-1));
// console.log(typeof stack); {}

// console.log(Array.isArray(stack)); // true
// console.log(Array.isArray("stack")); // false

// console.log(stack);
// const result1 = stack.push("React");
// const result2 = stack.unshift("Angular");
// const result3 = stack.pop();
// const result4 = stack.shift();
// console.log(stack);
// console.log(stack.length);
// console.log(result4);

// for (let i = 0; i < stack.length; i++) {
//   console.log(stack[i]);
// }

// stack.forEach((el, i, arr) => { // params: 1 - element, 2 - index, 3 - current array
//   console.log(i, el, arr);
// });

// const stack = ["HTML", "CSS", "JS"];
// const animals = ["Dogs", "Cats", "Rabbit"];
// const nums = [1, "2", 5, 13, "42", 99, "8"]; // 1, 13, 2, 42, 5, 8, 99

// stack.splice(1, 0, "SCSS", "SASS", "VUE"); // start - 1 (CSS), deleteCount - 1 (CSS), items - SCSS
// console.log(stack);

// const result = stack.slice(1, 2);

// console.log(stack);
// const result = stack.concat(animals, [1, 2, 3]);
// const result2 = [].concat(animals, [1, 2, 3]);
// console.log(stack);
// console.log(result);

// const arr = [
//   {
//     id: 1,
//     userName: "John",
//   },
//   {
//     id: 2,
//     userName: "Qwe",
//   },
// ];

// stack.sort();
// nums.sort((numA, numB) => {
//   return numB - numA;
// });

// nums.sort((objA, objB) => {
//   return objA.id - objB.id;
// });

// console.log(stack);
// console.log(nums);
// const arr = [];

// animals.forEach((animal) => {
//   arr.push(animal.toUpperCase());
// });
// const animals = ["Dogs", "Cats", "Rabbit"];

// const result2 = animals.map((animal) => {
//   if (animal.length > 5) {
//     return animal.toUpperCase();
//   }

//   return animal;
// }); // animals.length === result2.length ALWAYS!!!
// const arr = [...animals];
// console.log(animals);
// console.log(...animals);
// console.log(arr);
// const arr = [].concat(animals);
// const res = arr.reverse();
// console.log(animals);
// console.log(res);

// const str = "Hello world!";
// const splitedStr = str.split(" ");
// const splitedStr = str.split(" ")[0];

// const updatedArr = splitedStr.map((word) => {
//   return `${word}-`;
// });

// const joinedArr = updatedArr.join(" --- ");

// console.log(joinedArr);

// const animals = ["Dogs", "Cats", "Rabbit"];
// console.log(animals.indexOf("Dogs"));

// if (animals.indexOf("Dogs", 1)) {
//   console.log("Dogs");
// } else {
//   console.log("Empty");
// }

// if (animals.includes("Dogs", 1)) {
//   console.log("Dogs");
// } else {
//   console.log("Empty");
// }

// const result = animals.find((animal) => {
//   if (animal === "Cats") {
//     return animal;
//   }
// });

// const result3 = animals.find((animal) => {
//   if (animal === "Cats") {
//     return true;
//   }
// });

// const result2 = animals.find((animal) => animal.length > 5);

const animals = ["Dogs", "Dogs", "Cats", "Rabbit"];
// const result = animals.filter((animal) => animal === "Dogs");

// const result2 = animals.filter((animal) => {
//   if (animal.length === 4) {
//     return animal;
//   }
// });

// const result3 = animals.filter((animal) => {
//   if (animal.length === 4) {
//     return true;
//   }
// });

// const filteredArr = [];

// for (let i = 0; i < animals.length; i++) {
//   if (!filteredArr.includes(animals[i]) && animals[i] === "Dogs") {
//     filteredArr.push(animals[i])
//   }
// }
// console.log(result);

// const arr = [12, 3, 4, 5, [1, 2, 3, [3, [[[5]]]]]];
// console.log(arr.flat(Infinity));

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = nums.some((num) => {
//   return num > 8;
// });

// const result2 = nums.every((num) => {
//   return num > 0;
// });

// console.log(result2);

// const user = {
//   name: "Марія",
//   age: 20,
//   id: 1,
// };

// const users = [user];

// const nums = ['Губицький Микола']; // 'Губицький Микола' split(' ') // ['Губицький', 'Микола']
// (el, index, array) => {}
// (acc, cur, index, array) => {}
const result = nums.reduce((acc, cur, index, arr) => {
  return acc + cur;
}); // 0 - початкове значення акамулятора (acc)

console.log(result);

// 1
// acc = 0
// cur = 1
// return acc(0) + cur(1) = 1

// 2
// acc = 1
// cur = 2
// return acc(1) + cur(2) = 3
