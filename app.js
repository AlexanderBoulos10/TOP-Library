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
});

const displayBook = (book) => {
	let currentLi = document.createElement("li");
	currentLi.textContent = `${book.title} by ${book.author}, ${
		book.numOfPages
	}, ${book.isReadText()}`;
	bookList.append(currentLi);
};
