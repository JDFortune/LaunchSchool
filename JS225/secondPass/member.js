class Member {
  constructor(name) {
    this.name = name;
    this.book = null;
  }

  read(pageCount) {
    let message;
    if (this.book) {
      if ((this.book.currentPage + pageCount) >= this.book.pages) {
        pageCount = this.book.pages - this.book.currentPage;
        this.book.currentPage = this.book.pages;
        this.book.finished = true;
      } else {
        this.book.currentPage += pageCount;
      }
      message = this.book.finished ? 'finished!' : `on page ${this.book.currentPage}.`
      console.log(`${this.name} has read ${pageCount} pages of ${this.book.name}. They are ${message}`)
    } else {
      console.log(`${this.name} does not currently have any books checked out.`)
    }
  }
}

module.exports = Member;
