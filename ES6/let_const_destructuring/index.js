var num = 22;
console.log('num =>>', num);

//* var(variable) устаревшая версия присваивание значение для переменной
//*-----------------*/
let someVariable = 'islam';
console.log('someVariable =>>', someVariable);

//* мутабельная переменная которая может изменяться,
//* как значение так и тип данных которые напишем в переменной name с ключем let
someVariable = 42;
console.log('someVariable =>>', someVariable);

//*----------------*/
//* const - константа
//* Если переменная объявлена через ключевое слово const
//* то эта не переменная не мутабельна, это правило действует
//* если значение переменной примитив(number, string, boolean, null, undefined)
const age = null;
//* age = 24; //* error => Uncaught TypeError: Assignment to constant variable.

const arr = [1, 1, 2, 3, 5, 8, 13, 21];
arr.splice(2, 0, 'islam', 'js');
console.log('arr =>>', arr); //* мы можем изменять const только когда работаем с объектами
//* изменять струтуру в этом заключается мутабельность const
//* но важным аспектом является то что мы не можем перераспределять
//* например

// arr = ['islam', 'js']; //* Uncaught TypeError: Assignment to constant variable.

//* Destructuring - деструктуризация позволяет локанично изъять данные и распределять по ключевым словам

//* как было до ES6
// var person = {
//   firstName: 'islam',
//   lastName: 'Alyshbekuulu',
// };
// var firstName = person.firstName;
// var lastName = person.lastName;
// console.log('firstName + lastName =>>', firstName + ' ' + lastName);

//* Деструктуризация объекта  в ES6
const person = {
  firstName: 'Djon',
  lastName: 'Wick',
  user: {
    login: 'islam_dev',
    password: '123',
  },
};

const {
  firstName,
  lastName,
  user: { login, password },
} = person; //* деструктуризация объекта

console.log('firstName + " " + lastName =>>', firstName + ' ' + lastName);
console.log('login + " " + password =>>', login + ' ' + password);

//*------*/
//* Значение по умолчанию в деструктуризации
const { role = 'user', ...otherObjectElements } = person; //* Если не будет такого свойства как role то присвоется значение 'user'
console.log('otherObjectElements =>>', otherObjectElements); //* rest дает отделить объект и деструктурировать ту часть которая нам нужна
console.log('role =>>', role);

//**--------------*/
//* Деструктуризация массивов
const arrFib = [1, 1, 2, 3, 5, 8, 13, 21];
const [, a, b, c] = arrFib; //* запятая дает возможность перепрыгивать индексированный элемент
console.log('a =>>', a);
console.log('b =>>', b);
console.log('c =>>', c);

const [first, ...other] = arrFib;
console.log('first =>>', first);
console.log('other =>>', other);
