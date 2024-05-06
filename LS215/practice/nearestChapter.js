function nearestChapter(book, page) {
  let bookCopy = {...book};
  for (let chapter in bookCopy) {
    bookCopy[chapter] = Math.abs(bookCopy[chapter] - page);
  }

  let minVal = Math.min(...Object.values(bookCopy));
  let nearestChapters = Object.entries(bookCopy).filter(([chapter, pageDiff]) => pageDiff === minVal);
  nearestChapters = nearestChapters.map(([title, _]) => title);
  return nearestChapters.at(-1);
}

console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10)); // "Chapter 2"


console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)); // "The End?"


console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3)); // "Chapter 1b"