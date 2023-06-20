let myLibrary = [];

class Book {
	constructor(title, author, numOfPages, isRead) {
		this.title = title;
		this.author = author;
		this.numOfPages = numOfPages;
		this.isRead = isRead;
	}

	addBookToLibrary() {
		myLibrary.push(this);
	}

	isReadText() {
		if (this.isRead) {
			return "Read";
		} else {
			return "Not Read";
		}
	}
}

const book1 = new Book("Think and Grow Rich", "Napolean Hill", 290, false);

const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numOfPages = document.querySelector("#pages");
const checkIfRead = document.querySelector("#check");
const bookList = document.querySelector(".allBooks");
const addBook = document.querySelector(".addBook");
const cancelForm = document.querySelector(".cancelButton");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let book = new Book(
		title.value,
		author.value,
		numOfPages.value,
		checkIfRead.checked
	);

	book.addBookToLibrary();
	displayBook(book);

	title.value = "";
	author.value = "";
	numOfPages.value = "";
	checkIfRead.checked = false;
	form.style.display = "none";
});

const displayBook = (book) => {
	let currentLi = document.createElement("li");

	let content = document.createElement("p");
	content.textContent = book.title;
	currentLi.append(content);

	content = document.createElement("p");
	content.textContent = `By ${book.author}`;
	currentLi.append(content);

	content = document.createElement("p");
	content.textContent = `${book.numOfPages} Pages`;
	currentLi.append(content);

	let buttonContainer = document.createElement("div");
	buttonContainer.classList.add("listButtons");

	content = document.createElement("p");
	content.textContent = book.isReadText();

	let readButton = document.createElement("button");
	readButton.classList.add("readButton");
	if (!book.isRead) {
		readButton.classList.toggle("readButton");
	}
	readButton.textContent = "Read";
	readButton.addEventListener("click", () => {
		book.isRead = !book.isRead;
		readButton.classList.toggle("readButton");
		content.textContent = book.isReadText();
	});
	buttonContainer.append(readButton);

	let deleteButton = document.createElement("button");
	deleteButton.classList.add("deleteButton");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", () => {
		bookList.removeChild(currentLi);
	});
	buttonContainer.append(deleteButton);

	currentLi.append(buttonContainer);
	currentLi.append(content);
	bookList.append(currentLi);
};

addBook.addEventListener("click", () => {
	form.style.display = "inline-block";
});

cancelForm.addEventListener("click", () => {
	title.value = "";
	author.value = "";
	numOfPages.value = "";
	checkIfRead.checked = false;
	form.style.display = "none";
});

const deleteItem = document.querySelector(".deleteButton");

// deleteItem.addEventListener("click", () => {});
