const myLibrary = [];

function Book (title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

const bookshelf = document.querySelector("#bookshelf");

Book.prototype.displayBook = function() {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("bookContainer");
    
    const book = document.createElement("div");
    book.classList.add("book");
    if (this.readStatus) {
        book.classList.add("read");
    }
    bookContainer.appendChild(book);

    book.addEventListener("click", () => {
        this.toggleReadStatus(book);
    });
    
    const bookCover = document.createElement("div");
    bookCover.classList.add("bookCover");
    book.appendChild(bookCover);
    
    const bookInfo = document.createElement("div");
    bookInfo.classList.add("bookInfo");
    bookCover.appendChild(bookInfo);
    
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = this.title;
    bookInfo.appendChild(title);
    
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = this.author;
    bookInfo.appendChild(author);
    
    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = this.pages;
    bookCover.appendChild(pages);
    
    const removeBook = document.createElement("button");
    removeBook.classList.add("removeBook");
    removeBook.setAttribute("type", "button");
    removeBook.textContent = "Remove Book";

    removeBook.addEventListener("click", () => {
        bookshelf.removeChild(bookContainer);
    });
    bookContainer.appendChild(removeBook);

    bookshelf.appendChild(bookContainer);
};

Book.prototype.toggleReadStatus = function(bookElement) {
    this.readStatus = !this.readStatus;
    bookElement.classList.toggle("read");
};

const openBtn = document.querySelector("#openBtn");
const dialog = document.querySelector("dialog");
openBtn.addEventListener("click", () => {
    dialog.showModal();
});

const submitBtn = dialog.querySelector("#submitBtn");
const bookInput = dialog.querySelector("#bookInput");
const authorInput = dialog.querySelector("#authorInput");
const pageInput = dialog.querySelector("#pageInput");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const newBook = new Book(bookInput.value, authorInput.value, pageInput.value, false);
    myLibrary.unshift(newBook);

    newBook.displayBook();

    bookInput.value = "";
    authorInput.value = "";
    pageInput.value = "";

    dialog.close();
});

const cancelBtn = dialog.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", () => {
    dialog.close();
});