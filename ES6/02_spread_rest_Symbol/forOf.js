const arr = [23, 34, 45, 56, 67, 78, 89, 910, 1011, 1112, 1213];
const str = 'Hello, world!';
//* можно пройти через массив
// for (let item of arr) {
//   console.log('item =>>', item);
// }

// for (let item of str) {
//   console.log('item =>>', item);
// }

console.log('arr[Symbol.iterator] =>>', arr[Symbol.iterator]); //* Symbol это спец поле
console.log('str[Symbol.iterator] =>>', str[Symbol.iterator]); //* которое выдает нам функцию
//* по умолчанию у массивов и строк Symbol.iteartor по умолчанию
let iter = arr[Symbol.iterator](); //* так как Symbol.iterator выдает функцию можно сразу вызвать
console.log('iter =>>', iter);
//* при каждом next() массив итерируется, вот так примерно работает итерация for of
console.log('iter.next() =>>', iter.next());
console.log('iter.next() =>>', iter.next());
console.log('iter.next() =>>', iter.next());
console.log('iter.next() =>>', iter.next());
console.log('iter.next() =>>', iter.next());
console.log('iter.next() =>>', iter.next());
console.log('iter.next() =>>', iter.next());
