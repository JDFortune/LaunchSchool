export class Model {
  async getTodos() {
    let todos = await this.getData('/api/todos');
    return todos;
  }

  getData(url) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          resolve(xhr.response.Text);
        }
      }

      xhr.onerror = () => {
        reject('An error Occurred');
      }
    });
  }

  sendData(method, url, data = null) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        if (typeof data !== 'string') {
          data = JSON.stringify(data);
        }
        xhr.send(data);
      } else {
        xhr.send();
      }
      
      xhr.onload = () => {
        if (xhr.status === 201 || xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else if (xhr.status === 204) {
          resolve('Successfully Deleted');
        } else {
          reject(xhr.response);
        }
      }
    });
  }
}