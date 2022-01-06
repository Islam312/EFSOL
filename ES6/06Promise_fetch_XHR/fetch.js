//* fetch  по сути сам возвращает промис поэтому сразу можем возвратить fetch  не создовая экземпляр  new Promis()
//* по умолчанию у fetch() GET запрос

const requestURl = 'https://jsonplaceholder.typicode.com/users';

//* метод GET
// const sendRequest = (url) => {
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((err) => console.log('err =>>', err));
// };

// sendRequest(requestURl).then((data) => console.log('data =>>', data));

//* метод POST

const body = {
  name: 'islam',
  age: 25,
};
const sendRequest = (method, url, body) => {
  return fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log('err =>>', err));
};

sendRequest('POST', requestURl, body).then((data) =>
  console.log('data =>>', data)
);
