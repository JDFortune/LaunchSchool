const Member = require('./member.js');
const Book = require('./book.js');

class Library {
  constructor(name) {
    this.name = name;
    this.members = [];
    this.books = [];
  }

  addMember(name) {
    let member = new Member(name);
    this.members.push(member);
    return member;
  }

  addBook(name, category, author, pages) {
    let book = new Book(name, category, author, pages);
    this.books.push(book);
    return book;
  }

  checkout(book, member) {
    if (book.checkedOut) {
      console.log('Book is currently unavailable');
    } else {
      this.books = this.books.filter(b => b !== book);
      book.checkedOut = true;
      member.book = book;
      console.log(`${member.name} has checked out ${book.name}`);
    }
  }

  checkIn(member) {
    let book = member.book;
    member.book = null;
    book.reset();
    this.books.push(book);
    console.log(`${member.name} has returned book: ${book.name}`)
  }

  availableBooks() {
    console.log('The following Books are Available: ')
    console.log('-----------------------------------');
    this.books.forEach(({name}, idx) => console.log(`${idx + 1}: ${name}`));
    console.log('-----------------------------------');
  }

  listMembers() {
    console.log('Current Library Members:');
    console.log('------------------------');
    this.members.forEach(member => {
      console.log(`Member: ${member.name}. Book Checked Out: ${member.book ? member.book.name : 'none'}`)
    });
    console.log('------------------------');
  }
}

let library = new Library('Lib');
let greatGatsby = library.addBook('Great Gatsby', 'classic', 'F. Scott Fitzgerald', 137);
let harryPotter = library.addBook('Harry Potter and the Sorceror\'s Stone', 'fantasy, adventure', 'JK Rowling',  309);
let pete = library.addMember('Pete');
let sam = library.addMember('Sam');
library.checkout(harryPotter, pete);

console.log('')
pete.read(300);
pete.read(9);
console.log('');
library.availableBooks();
console.log('');
console.log(library.listMembers());

library.checkIn(pete);
library.availableBooks();

sam.read(20);
library.checkout(greatGatsby, sam);
sam.read(20);
console.log(sam.book);
library.availableBooks();
