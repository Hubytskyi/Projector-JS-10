"use strict";

// const title = document.querySelector(".title");
// console.log(title);

// console.log(title.hasAttribute("id"));
// console.log(title.hasAttribute("class"));
// console.log(title.hasAttribute("href"));

// console.log(title.getAttribute("id"));
// title.setAttribute("class", "class-from-attr");
// title.setAttribute("id", "header");

// title.removeAttribute("id");
// console.log(title.attributes);

// console.log(title.dataset);

// console.log(title.nodeType);
// console.log(title.firstChild.nodeType);
// console.log(document.nodeType);

// console.log(title.nodeName);
// console.log(title.firstChild.nodeName);
// console.log(document.nodeName);

// console.log(title.textContent);
// console.log(title.firstChild);

// const button = document.querySelector(".button");
// const block = document.querySelector("#block");
// console.log(block);

// function handleClick() {
//   console.log("click");
// }

// function handleMouseOver() {
//   const randomHeight = Math.round(Math.random() * 100);
//   block.style.height = `${randomHeight}px`;
//   console.log("mouseover");
// }

// function handleMouseOut() {
//   console.log("mouseout");
// }

// button.addEventListener("click", handleClick);
// block.addEventListener("mouseover", handleMouseOver);
// block.addEventListener("mouseout", handleMouseOut);

// const form = document.querySelector("form");
// function handleSubmit(event) {
//   event.preventDefault();
//   const name = event.target.name.value;
//   const email = event.target.email.value;

//   if (name.length < 2) {
//     alert("Введіть довше ім'я");
//     return;
//   }

//   // відправка на сервер
//   console.log("event: ", event.target.name.value);
//   console.log("event: ", event.target.email.value);
// }
// form.addEventListener("submit", handleSubmit);
// form.addEventListener("submit", (event) => {});

// window.addEventListener("scroll", (e) => {
//   if (window.scrollY > 20) {
//     alert("Реклама");
//   }
// });

// window.addEventListener("resize", (e) => {
//   console.log(window);
// });

// const button = document.querySelector("button");
// // console.log(button);
// button.addEventListener("click", () => {
//   console.log("click on button");
// });

// const li = document.querySelector("li");
// li.addEventListener("click", () => {
//   console.log("click on li");
// });

// const tableRows = document.querySelectorAll("tr");
// tableRows.forEach((row) => {
//   row.addEventListener("click", () => {
//     console.log("redirect");
//   });
// });

// function handleButtonClick(event) {
//   event.stopPropagation();
//   console.log("open drawer", event);
// }

// const tableButtons = document.querySelectorAll("button");
// tableButtons.forEach((button) => {
//   button.addEventListener("click", handleButtonClick, true);
// });

detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

// detonatorTimer(delay) {
// 	const timerId = setInterval(() => {
//         if ('some condition...') {
//             console.log('...')
//             delay--
//         } else {
//             console.log('BOOM!')
//             clearInterval(timerId);
//         }
//     }, 1000)
// }
