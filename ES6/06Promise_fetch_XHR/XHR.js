const requestURl = 'https://jsonplaceholder.typicode.com/users';

//* чтобы более удобно заимодействовать с асинхронными запросами
//* будем работать с промисами
const sendRequest = (method, url) => {
  return new Promise((resolve, reject) => {
    //* чтобы сделать через XHR  мы должны вызвать его

    const xhr = new XMLHttpRequest();

    //* .open() - метод открывает соединение
    //* 1 аргумент это метод запроса(GET, POST, PUT, DELETE, PATCH)
    //* 2 аргумент это URL адрес куда мы должны отправить запрос
    xhr.open(method, url);

    //* все запросы и респонсы(ответы) в сети отправляются в значении string
    //* что бы распарсить строковое значение в json  объект, можно обратиться к глобальному объкту JSON
    //* и вызвать метод .parse()
    //* или же воспользоваться свойством XHR .responseType = "json"

    xhr.responseType = 'json';

    //* определяем метод onload что бы отобразить response
    xhr.onload = () => {
      //* callback resolve  сработает в случае успешного response
      resolve(xhr.response);
    };

    //* Обработка ошибок при response - нужно определить метод onerror

    xhr.onerror = () => {
      reject(xhr.response); //* callback reject  сработает при ощибке запроса или  response
    };

    //* .send() - метод отправление запроса на сервер
    xhr.send();
  });
};

sendRequest('GET', requestURl)
  .then((data) => {
    console.log('data =>>', data);
  })
  .catch((err) => {
    console.log('err =>>', err);
  });

//* чтобы отправить Post запрос необходимо создать где мы будем отправлять данные на сервер
//* Использую JSON.strigify()
function sendPostRequest(method, url, body) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
}

sendPostRequest('POST', requestURl, { name: 'islam', age: 25 })
  .then((data) => {
    console.log('data =>>', data);
  })
  .catch((err) => console.log('err =>>', err));
