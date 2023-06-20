let myLibrary = [];

class Book {
	constructor(title, author, numOfPages, isRead) {
		this.title = title;
		this.author = author;
		this.numOfPages = numOfPages;
		this.isRead = isRead;
	}
	// info() {
	// 	if (this.isRead) {
	// 		console.log(
	// 			`${this.title} by ${this.author}, ${this.numOfPages}, done reading.`
	// 		);
	// 	} else {
	// 		console.log(
	// 			`${this.title} by ${this.author}, ${this.numOfPages} pages, not read yet.`
	// 		);
	// 	}
	// }

	addBookToLibrary() {
		myLibrary.push(this);
	}
}

const book1 = new Book("Think and Grow Rich", "Napolean Hill", 290, false);
