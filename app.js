import { form, taskList, clearBtn, filterInput } from "./constants.js";
import {
  showTasks,
  addTask,
  deleteTask,
  deleteAllTasks,
  filterTasks,
} from "./functions.js";

// слухачі подій
// запускаємо функцію showTasks коли весь HTML загружений
document.addEventListener("DOMContentLoaded", showTasks);
// запускаємо функцію addTask коли відправляємо форму (клікаємо на кнопку "Додати завдання")
form.addEventListener("submit", addTask);
// запускаємо функцію deleteTask коли клік попадає на список <ul>
taskList.addEventListener("click", deleteTask);
// запускаємо функцію після кліку на кнопку "Видалити всі елементи"
clearBtn.addEventListener("click", deleteAllTasks);
// запускаємо функцію filterTasks після того як ввідпускаємо клавішу (тоді, коли фокус в інпуті "Пошук завдань")
filterInput.addEventListener("keyup", filterTasks);
