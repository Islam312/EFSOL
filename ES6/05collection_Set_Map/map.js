//* new Map() - Структура данных Мар частично похож на структуру данных объекта
//* которая на вход принимает записи entries - это массивы в массиве
//* и в каждом дочернем массиве находиться ключ значение

const obj = {
  name: 'islam',
  age: 24,
  user: 'username',
};

//* что бы создать структуру данных map, нужно создать структуру записи entries
//* entries создается следующим образом:
const newEntries = Object.entries(obj);
// console.log('newEntries =>>', newEntries);
//* Структура  map  очень похожа на объекты
const map = new Map(newEntries);
// console.log('map =>>', map);
//* отличия от объекта
//* 1. к значениям map не сможем на прямую обратиться
//* и для этого существуют методы map()
//* метод get() - что бы взять значение определенного map ключа

// console.log('get =>>', map.get('name'));
// console.log('get =>>', map.get('age'));

//* метод set()  - чтобы добавлять или перезаписывать
map.set('host', 'localhost').set('name', 'Jhon');

// console.log('map =>>', map);
//* также самое не обычное что в map ключи можно задавать объекты или же NaN

map.set(obj, 'new object').set(NaN, 'Not a Number');
// console.log('map =>>', map);

//* методом  delete(key) удаляется элемен по ключу
map.delete(obj);
console.log('map =>>', map);

//* clear() удаляет все

// map.clear();
// console.log('map =>>', map);

//* has(key) метод ищет элемент по ключу

console.log('map.has("name") =>>', map.has('name')); //* true

//* через свойство size можем узнать количество ключей данной карты

console.log('map.size =>>', map.size);

//*Работа с циклами
//* for of

console.log('=============================');
for (let [key, value] of map) {
  console.log('key =>>', key);
  console.log('value =>>', value);
}

console.log('=============================');
//*метод values()
//* выводит через for of только значения карты map
for (let value of map.values()) {
  console.log('value =>>', value);
}

console.log('=============================');
//*метод keys()
//* выводит через for of только ключи карты map
for (let key of map.keys()) {
  console.log('key =>>', key);
}
console.log('=============================');

//*  метод массивов  forEach()
map.forEach((value, key, map) => {
  console.log(key, '=>>', value);
});
console.log('=============================');

//* у карты типа map можно быстро менять структуру данных
//* map =>> object

const mapObj = Object.fromEntries(map);
console.log('mapObj =>>', mapObj);

//* или же быстро перейти на массивы

//*1
const mapArray = [...map];
console.log('mapArray =>>', mapArray);

//*2
const mapArray1 = Array.from(map);
console.log('mapArray1 =>>', mapArray1);


