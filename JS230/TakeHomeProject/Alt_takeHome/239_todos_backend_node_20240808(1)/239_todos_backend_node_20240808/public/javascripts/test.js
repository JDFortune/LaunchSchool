// function get() {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', '/api/todos');
//     xhr.responseType = 'json';
//     xhr.send();

//     xhr.onload = () => {
//       resolve(xhr.response);
//     }
//   });
// }

// let todos;

// get().then(result => todos = result).then(() => console.log('Test Todos:', todos));

// function update(id) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('PUT', `/api/todos/${id}`);
//     let data = {title: 'Good', completed: false, day: '08', month: '02', year: '2014'};
//     let json = JSON.stringify(data);
//     xhr.send(json);

//     xhr.onload = () => {
//       resolve(xhr.status);
//     }
//   });
// }

// update(14).then(console.log);