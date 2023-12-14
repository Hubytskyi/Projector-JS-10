"use strict";

// let isFormLoading = false;

// const promise = new Promise((resolveFn, rejectFn) => {
//   // ...

//   const result = {
//     data: [{ userId: 1, name: "John", age: 42 }],
//     ok: true,
//   };

//   if (result.ok) {
//     resolveFn(result.data);
//     return;
//   }

//   rejectFn(new Error("щось трапилось"));
// });

// promise стан = fulfilled --> then (приймає те що ми передали в resolveFn)
// promise стан = rejected --> catch (приймає помилку яку ми передали в rejectFn)
// promise будь який стан state = finally

// console.log(promise);
// promise.then((users) => {
//   console.log("Ми в then", users);
//   alert("Ви успішно відправили форму!");
// });

// promise.catch((error) => {
//   console.error("Ми в catch", error.message);
//   alert(error.message);
// });

// promise.finally(() => {
//   isFormLoading = false;
//   console.log("Ми в finally");
// });

// function handleSubmit(data) {
//   isFormLoading = true;
//   //....
// }

// function renderUsers(users) {
//   const userList = document.querySelector(".list");
//   users.forEach((user) => {
//     const userLi = "...";
//     userList.append(userLi);
//   });
// }

// GET, POST, PATCH, PUT & DELETE
// PUT & PATCH = UPDATE

// function getUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       console.log(response);

//       if (response.ok) {
//         const users = response.json();
//         console.log(users);
//         return users;
//       }

//       throw new Error("щось сталось");
//     })
//     .then((users) => {
//       console.log(users);
//       return users;
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally((data) => {
//       console.log("Все завершилось", data);
//     });
// }

// getUsers();

// function getSomeData() {
//   return new Promise(() => {});
// }
// console.log(getSomeData());

// const result = getSomeData()
// result.then().catch()

const form = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();

  const userName = event.target.username.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  const user = {
    userName: userName,
    email,
    password,
  };

  console.log(user);
  console.log(JSON.stringify(user));

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(
        "Не вдалось зреєструвати користувача, спробуйте пізніше!"
      );
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      alert(error.message);
    });
}
form.addEventListener("submit", handleSubmit);

[1, 2, 3, 4, 5]
  .map(() => {
    //..
  })
  .filter(() => {})
  .join();
