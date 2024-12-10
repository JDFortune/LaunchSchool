// let nav = document.querySelectorAll('header')[1];

// document.body.insertAdjacentElement('afterbegin', nav);

// let mySiteH1 = document.querySelector('h1');

// nav.insertAdjacentElement('afterbegin', mySiteH1);

// let images = document.getElementsByTagName('img');

// let figures = document.querySelectorAll('figure');

// console.log(images[0]);
// console.log(figures);

// figures[0].insertAdjacentElement('afterbegin', images[1]);

// figures[1].insertAdjacentElement('afterbegin', images[1]);

// let article = document.querySelector('article');

// [].slice.call(figures).forEach(figure => {
//   article.insertAdjacentElement('beforeend', figure);
// });

let header = document.querySelector('body > header');
let h1 = document.querySelector('main > h1');
header.insertBefore(h1, header.firstChild);
document.body.insertBefore(header, document.body.firstChild);

let [chinStickFigure, babyMopFigure] = document.querySelectorAll("figure");
let babyMopImage = chinStickFigure.querySelector("img");
let chinStickImage = babyMopFigure.querySelector("img");
chinStickFigure.insertBefore(chinStickImage, chinStickFigure.firstChild);
babyMopFigure.insertBefore(babyMopImage, babyMopFigure.firstChild);

let article = document.querySelector("article");
// article.insertBefore(chinStickFigure, null);
// article.insertBefore(babyMopFigure, null);

article.insertAdjacentElement('beforeEnd', chinStickFigure);
article.insertAdjacentElement('beforeEnd', babyMopFigure);