class Book {
  constructor(name, category, author, pages) {
    this.name = name;
    this.category = category;
    this.pages = pages;
    this.author = author
    this.currentPage = 0;
    this.finished = false;
    this.checkedOut = false;
  }

  reset() {
    this.currentPage = 0;
    this.finished = false;
    this.checkedOut = false;
  }
}

module.exports = Book;
