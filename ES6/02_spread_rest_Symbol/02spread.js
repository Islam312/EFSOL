//* spread operator

const arr1 = [2, 3, 4];
const arr2 = [1, 12, 8];
//* как быстро мы можем узнать мах число из этих массивов
let max = Math.max(1, 2, 5, 2); //* Метод мах дает возможность найти наибольшое чичло из чисел, но у нас массив
console.log('max =>>', max);
//* и чтобы быстро разворачивать массивы есть оператор  spread

let maxElementArr = Math.max(...arr1, ...arr2);

console.log('maxElementArr =>>', maxElementArr)