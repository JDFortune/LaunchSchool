let request = new XMLHttpRequest();
request.open('GET', 'https://api.github/com/repose/rails/rails');
request.send();


// POST /books HTTPS/1.1
// host: lsjs230-book-catalog.herokuapp.com
// Content-Type = application/json; charset=UTF-8
// Accept: */*

// {
//   "title": "Eloquent JavaScript",
//   "author": "Marijn Haverbeke",
// }