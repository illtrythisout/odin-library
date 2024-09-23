const myLibrary = [];

function Book (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.unshift(book);
}

const bookshelf = document.querySelector("#bookshelf")
function displayBook(bookObj) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("bookContainer");

    const book = document.createElement("div");
    book.classList.add("book");
    bookContainer.appendChild(book);

    const bookCover = document.createElement("div");
    bookCover.classList.add("bookCover");
    book.appendChild(bookCover);

    const bookInfo = document.createElement("div");
    bookInfo.classList.add("bookInfo");
    bookCover.appendChild(bookInfo);

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = bookObj.title;
    bookInfo.appendChild(title);

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = bookObj.author;
    bookInfo.appendChild(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = bookObj.pages;
    bookCover.appendChild(pages);

    const removeBook = document.createElement("button");
    removeBook.classList.add("removeBook");
    removeBook.setAttribute("type", "button");
    removeBook.textContent = "Remove Book";
    bookContainer.appendChild(removeBook);
    
    const readStatus = document.createElement("input");
    readStatus.classList.add("readStatus");
    readStatus.setAttribute("type", "checkbox");
    bookContainer.appendChild(readStatus);

    bookshelf.appendChild(bookContainer)
    
}

const harryPotter = new Book("Harry Potter", "J.K.Rowling", "589", true)

const book = {title: "Harry Potter", author: "J.K.Rowling", pages: "589", readStatus: true}

displayBook(harryPotter)