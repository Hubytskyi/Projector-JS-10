"use strict";

// console.log(navigator);

// const user = {
//   id: 1,
//   name: "John",
// };

// JSON.parse()
// JSON.stringify()

// localStorage.setItem("user", JSON.stringify(user));
// localStorage.setItem("user2", JSON.stringify(user));
// const userFromLS = localStorage.getItem("user");
// const parseUser = JSON.parse(userFromLS);
// console.log(parseUser);

// localStorage.removeItem("user2");
// localStorage.clear();

// const localStorageCustom = {
//   user: {
//     id: 1,
//     name: "John",
//   }
// };

// localStorageCustom.addItem()

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.childNodes);
// console.log(document.body.children); // children - всі дочірні елементи

// const title = document.querySelector('h1');
// const title2 = document.querySelector('.title');
// const title3 = document.querySelector('#main-title');

// const title4 = document.getElementById('main-title');
// const section = document.querySelector('.section-one');

// console.log(section.previousElementSibling);
// console.log(section.nextElementSibling);
// console.log(section.firstElementChild);
// console.log(section.firstChild);

// const item = document.querySelector('.item');
// const items = document.querySelectorAll('.item');
// const secondTitle = document.querySelector('.second-title')
// console.log(item.closest('.test'));
// console.log(item.closest('.section-one').querySelector('#block'));
// console.log(section.contains(secondTitle));
// console.log([...items]);
// [...items].forEach(item => console.log(item));

// function generateDivs(text) {
//     const div = document.createElement('sdgdsfgdfg');

//     // 1
//     const textNode = document.createTextNode('text');
//     div.appendChild(textNode);

//     // 2
//     div.innerHTML = text;

//     return div;
// }

// const generatedDiv = generateDivs('some text');
// console.log(generatedDiv)

// const list = document.querySelector('.list')
// const li = document.createElement('li')
// li.innerHTML = 'Some text'
// list.after(li);
// list.prepend(li);

// list.insertAdjacentHTML('beforeend', `
//     <li class="item">Item #4</li>
//     <li class="item">Item #5</li>
//     <li class="item">Item #6</li>
// `)

const secondTitle = document.querySelector('.second-title');
// secondTitle.className = 'new-title';
// const items = document.querySelectorAll('.item')
// const item = document.querySelector('.item')
// item.classList = 'new-title'
// items.forEach((item) => {
//     item.className = 'new-item'
// })
// console.log(secondTitle)

// secondTitle.classList.add('new-title');
// secondTitle.classList.remove('test');

// if (secondTitle.classList.contains('new-title')) {
//     console.log('secondTitle contains new-title')
// }

function toggleActiveClass(element) {
    element.classList.toggle('active')
    // if (element.classList.contains('active')) {
    //     element.classList.remove('active');
    //     return;
    // }

    // element.classList.add('active');
}

toggleActiveClass(secondTitle);
toggleActiveClass(secondTitle);
toggleActiveClass(secondTitle);
toggleActiveClass(secondTitle);

// secondTitle.style = 'color: red; background-color: green'
// secondTitle.style.fontSize = '50px';

// console.log(secondTitle.clientWidth)
// console.log(secondTitle.offsetLeft)