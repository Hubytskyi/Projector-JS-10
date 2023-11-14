"use strict";

// function sayHello() {
//   alert("Hello");

//   setTimeout(sayHello, 2000);
// }

// const id = setTimeout(sayHello, 2000);

// const id2 = setTimeout(sayHello, 3000);

// clearTimeout(id2);

// const id = setInterval(sayHello, 1000);

// clearInterval(id);

// setInterval(sayHello, 1000); // alert

// function getName(role, test) {
//   console.log(`My name is ${this.name}, ${role}, ${test}`);
//   return 1;
// }

// const name = "Jane";

// const user1 = {
//   id: 1,
//   name: "John",
//   age: 42,
//   sayHello: function () {
//     console.log(`My name is ${user1.name}`);
//   },
//   getName: getName,
//   roles: ["admin", "user"],
//   showRoles() {
//     this.roles.forEach((role) => {
//       console.log("this: ", this);
//       console.log(`My name is ${this.name}, my role - ${role}`);
//     });
//   },
// };

// setTimeout(user1.getName.bind(user1), 1000);
// const newGetName = user1.getName.bind(user1);

// якщо ми передаємо функцію як аргумент або записуємо її в змінну
// і якщо функція не викликається - втрачається контекст

// newGetName();

// const user2 = {
//   id: 2,
//   atest: "Jane",
//   age: 22,
//   sayHello: () => {
//     console.log(this);
//     console.log(`My name is ${this.age}`);
//   },
//   getName, // getName: getName === getName
// };

// user2.sayHello();

// user1.showRoles();
// user2.sayHello();
// console.log(this);
// const arr = ["admin", "test"]
// const newGetName = user1.getName.bind(user1, "admin", "test"); // кількість параметрів
// const res = user1.getName.call(user1, "admin", "test"); // кількість параметрів
// user1.getName.apply(user1, arr); // масив параметрів
// console.log(newGetName());
// bind - не викликає функцію, а тільки змінює контекст
// call, apply - викликають функцію одразу

// function outer() {
//   console.log(this);
//   function inner() {
//     console.log(this);
//   }

//   inner();
// }

// outer();
