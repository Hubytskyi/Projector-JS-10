"use strict";

// const p1 = Promise.resolve(3);
// const p2 = 123;
// const p3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("some text");
//   }, 2000);
// });

// const p4 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("some text 2");
//   }, 3000);
// });

// Promise.any([p3, p4]).then((values) => {
//   console.log(values);
// });

// function getUsers2() {
//   let users = fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then((users) => {
//       return users;
//     });
//   console.log(users);
// }

// new Promise((resolve, reject) => {
//   console.log("start");

//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then((users) => {
//       fetch("https://jsonplaceholder.typicode.com/users").then(
//         (response) => {}
//       );
//     });
// });

let isLoading = false;

async function getUsers() {
  isLoading = true;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (response.ok) {
      const users = await response.json();
      const response2 = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const todos = await response2.json();
      console.log(todos);
      return;
    }

    // throw new Error("some error");
  } catch (e) {
    // (e)
    console.log();
  } finally {
    isLoading = false;
  }
}

getUsers();

// try -> catch(e) -> finnaly
// then(res) -> catch(e) -> finnaly

// const button = doc...
// button.addEventListener
