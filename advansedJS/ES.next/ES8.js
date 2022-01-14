//* Object.keys() and Object.values()

const obj = {
  name: 'James',
  age: 29,
  email: 'james@mail.ru',
};

console.log('Object.keys(obj) =>>', Object.keys(obj)); //* выводит все ключи
console.log('Object.values(obj) =>>', Object.values(obj)); //* выводит все значения объекта

//* Object.entries() => преобразование в список Map()

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} => ${value}`);
}

//* padStart выравнивание текста  ==> padEnd выравнивает в обратную сторону

const arrayCity = ['Paris', 'Bishkek', 'London', 'Naryn', 'Osh'];

let city = arrayCity.map((item) => item.padStart(10, ' '));

city.forEach((item) => {
  console.log(item);
});

//* async await

async function getUser(handle) {
  const response = await fetchUser(handle);
  return await response.json();
}

async function fetchUser(handle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(`https://api.github.com/users/${handle}`));
      reject(new Error('404'));
    }, 3000);
  });
}

async function showUser(handle) {
  const user = await getUser(handle); //* очень слабая конструкция в плане оптимазации и сбора данных и запросов
  const repo = await getUser(`${handle}/repos`); //* здесь await  работает синхронно последующий await  след await
  console.log('user =>>', user);
  console.log('repos quantity =>>', repo.length);
}

async function optimalShowUser(handle) {
  const [user, repo] = await Promise.all([
    getUser(handle),
    getUser(`${handle}/repos`), //* оптимальный выбор работы с async  await  функции  в Promis.all
  ]);
  console.log('user1 =>>', user);
  console.log('repos1 quantity =>>', repo.length);
}

showUser('torvalds');
optimalShowUser('torvalds');
