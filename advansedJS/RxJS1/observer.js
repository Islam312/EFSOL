import { fromEvent } from 'rxjs';

const url = 'https://api.github.com/users';
const btnReq = document.querySelector('#btn-request');
const inputReq = document.querySelector('#input-request').value();
const table = document.querySelector('.table');

fromEvent(btnReq, 'click').subscribe(
  fetch(url + inputReq)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Сервер не отвечает. Ошибка номер ${response.status}`);
      }
    })
    .then((res) => {
      return `<tbody>
        <tr>
          <td>Name: </td>
          <td>${res.name}</td>
        </tr>
        <tr>
          <td>Age: </td>
          <td>${res.age}</td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>${res.email}</td>
        </tr>
        <tr>
          <td>Company: </td>
          <td>${res.company}</td>
        </tr>
      </tbody>`;
    })
);
