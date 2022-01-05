//*  тот же самый Map() с маленькими отличиями
let obj = {
  name: 'islam',
};
const arr = [obj];

obj = null; //* даже после null obj  находящийся в массиве имеет значение
//* и в этом заключается утечка памяти

console.log('null =>>', null);
console.log('arr =>>', arr[0]);

//* Weakmap предотворяет утечку память выше указанного

//* weakMap  в качестве своего ключа в записи берет только объект
let obj1 = {
  name: 'Jade',
};
const map = new WeakMap([[obj1, 'weakmap']]);
console.log('map.has(obj1) =>>', map.has(obj1));
obj1 = null;
console.log('obj1 =>>', obj1);
console.log('map.has(obj1) =>>', map.has(obj1)); //* запись entries самостоятельно удаляется 
//* в случае того что родитель был удален
//* или переформирован

//* имеет методы только get set delete has
