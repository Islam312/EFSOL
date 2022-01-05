//* Set()

const set = new Set([1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9]);

//* set на выходе выдает только уникальные значания массива

console.log('set =>>', set); //* [1,2,3,4,5,6,7,8,9]
//* то есть он просто дает новый массив с удаленными повторяющимися значениями
//* add() - метод добавления
set.add(20).add(30).add(20);
console.log('set =>>', set);
//* has() - метод поиска
console.log('set.has(20) =>>', set.has(20)); //* true
console.log('set.has(25) =>>', set.has(25)); //* false
//* size -  свойство количества элементов
console.log('set.size =>>', set.size);
//* clear() -  удалить все элементы
// set.clear()
