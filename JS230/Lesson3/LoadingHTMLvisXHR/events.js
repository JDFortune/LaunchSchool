const HOST = "https://ls-230-web-store-demo.herokuapp.com"

function addProduct(product) {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify(product);
  
    let xhr = new XMLHttpRequest();
    xhr.open('POST', HOST + '/v1/products');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Authorization', 'token AUTH_TOKEN');
    xhr.send(data);
  
    xhr.onload = event => {
      resolve(`This product was added: ${xhr.responseText}`);
    };
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await addProduct({name: 'Bird', sku: 'bird2', price: 250})
    .then(console.log)
    .catch(console.error);

  let store = document.getElementById('store');

  let request = new XMLHttpRequest();
  request.open('GET', HOST + '/products');

  request.addEventListener('load', event => store.innerHTML = request.response);
  request.send();

  store.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName !== 'A') return;

    event.preventDefault();

    let request = new XMLHttpRequest();
    request.open(
      "GET",
      HOST + target.getAttribute("href")
    );

    request.addEventListener('load', event => (store.innerHTML = request.response));
    request.send();
  })

  store.addEventListener('submit', event => {
    event.preventDefault();
    let request = new XMLHttpRequest();

    let form = event.target;
    let formData = new FormData(form);

    request.open('POST', `${HOST}${form.getAttribute('action')}`);
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

    request.send(formData);


    request.onload = function(event) {
      store.innerHTML = request.response;
    }

    store.dispatchEvent
  });

  
});