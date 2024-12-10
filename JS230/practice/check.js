// async function myFunction() {
//   console.log('before');
//   let json = await fetchJson('http://example.org');
//   console.log(json);
//   console.log('after');
  
//   }
  
// function fetchJson(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       resolve('thing');
//     });
//   });
// }

// myFunction();
// console.log('outside async');

// alert($('ul#navigation').find('li').length);

let $css = $('#css').closest('li');

$css.parent().children().hide();