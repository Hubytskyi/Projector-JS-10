"use strict";

// const dog = {
//   name: "Dog",
// };

// class Animal {
//   constructor(isEatMeat) {
//     this.isEatMeat = isEatMeat;
//   }

//   intro() {
//     if (this.isEatMeat) {
//       console.log("I like to eat meat");
//     } else {
//       console.log("I don't like to eat meat");
//     }
//   }
// }

// const auth = {
//   login: function () {},
//   logout: function () {},
// };

// class Auth {
//   login() {}
//   logout() {}
// }

// class API {
//   constructor(baseUrl) {
//     this.baseUrl = baseUrl;
//   }
// }

// class BookAPI extends API {
//   constructor(baseUrl) {
//     super(baseUrl);
//   }
//   getAllBook() {}

//   getBookById(id) {}

//   deleteBook(id) {}
// }

// const bookApi = new BookAPI("localhost:3000");

// class Pets extends Animal {
//   constructor(type, isEatMeat) {
//     super(isEatMeat);
//     this.type = type;
//   }

//   about() {
//     console.log(`My type is ${this.type}, ${this.isEatMeat}`);
//   }

//   intro() {
//     console.log("Hello!");
//   }
// }

// bookApi.getAllBook()

// class Cat extends Pets {}
// class PremiumCat extends Cat {}

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   run() {
//     console.log(`My name is ${this.name}, and I like to run`);
//   }
// }

// const loki = new Dog("Loki");
// const animal = new Animal(false);
// const cat = new Pets("cat", true);
// const dog = new Pets("dog", false);

// loki.run();

// console.log(Animal);

// animal.intro();

// cat.intro();
// console.log(cat);
// console.log(dog);

class CoffeeMachine {
  #counter;

  constructor(name, autoClear) {
    this.#counter = 0;
    this.name = name;
  }

  makeCoffee() {
    if (this.#counter >= 5) {
      if (autoClear) {
        this.clear();
      } else {
        console.log("Ви не можете зробити більше кави, очистіть двигун");
        return;
      }
    }
    console.log("Ваша кава готова");
    this.#counter += 1;
  }

  makeLatte() {
    this.#warmMilk();
    this.makeCoffee();
  }

  #warmMilk() {
    console.log("Ви підігріли молоко");
  }

  clear() {
    this.#counter = 0;
  }
}

class Rabbit {
  constructor(toys) {
    this.toys = toys;
  }

  someMethod() {
    const updatedToys = this.toys.map((toy) => toy.toUpperCase());
    return updatedToys;
  }
}

const array = [1, 2, 3, 4, 5, 6];

const rabbit = new Rabbit(array);
const result = rabbit.someMethod();
const franke = new CoffeeMachine("Franke");
const smeg = new CoffeeMachine("Smeg", true);
franke.makeCoffee();
franke.makeCoffee();
franke.makeCoffee();
franke.makeCoffee();
franke.makeCoffee();
franke.makeCoffee();
franke.clear();
franke.makeCoffee();
franke.makeLatte();
// franke.#counter = 0;
console.log(franke);

// homework
const taskList = document.querySelector(".collection");
taskList.addEventListener("click", handleItem);

function handleItem(event) {
  if (event.target.classList.contains("delete-btn")) {
    removeTask();
  }
  if (event.target.classList.contains("edit-btn")) {
    editTask();
  }
}
function editTask() {
  // ...
}
// видалити якусь конкретну таску
function removeTask(event) {
  // якщо ми клікнули по хрестику - тоді
  // отримуємо всі елементи з стореджа
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  // отримуємо вміст задачі (те що всередині li)
  const taskValue = event.target.previousSibling.textContent;

  // фільтруємо задачі
  const filteredTasks = tasks.filter((task) => {
    return task !== taskValue;
  });

  // зберігаємо в стореджі відфільтровані задачі
  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  // запускаємо функцію renderTasks
  renderTasks();
}
