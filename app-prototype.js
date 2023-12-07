const form = document.querySelector(".book-form");
const bookList = document.querySelector(".book-list");

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI(form) {
  this.form = form;
  this.tableBody = document.querySelector(".book-list");
}

UI.prototype.addBook = function (book) {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><button class="delete-book">x</button></td>
    `;

  this.tableBody.appendChild(row);
};

UI.prototype.removeBook = function (target) {
  if (target.classList.contains("delete-book")) {
    target.closest("tr").remove();
    this.showAlert("Ви успішно видалили книгу!", "success");
  }
};

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement("div");
  div.classList = className;
  div.innerHTML = message;

  this.form.before(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
};

UI.prototype.resetForm = function (form) {
  this.form.reset();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleValue = event.target.title.value.trim();
  const authorValue = event.target.author.value.trim();
  const isbnValue = event.target.isbn.value.trim();

  const ui = new UI(form);
  console.log("ui: ", ui);
  if ([titleValue, authorValue, isbnValue].includes("")) {
    ui.showAlert("Необхідно заповнити всі поля", "error");
  } else {
    const book = new Book(titleValue, authorValue, isbnValue);

    ui.addBook(book);
    ui.resetForm();
    ui.showAlert("Ви успішно додали книгу!", "success");
  }
});

bookList.addEventListener("click", (event) => {
  const ui = new UI(form);
  ui.removeBook(event.target);
});
