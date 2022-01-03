//* rest parametr

function max(...numbers) {
  //* Rest parametr дает возможность создать массив аргументов
  numbers.sort(); //* numbers это массив который включает все те аргументы
  let max = numbers[numbers.length - 1];
  return max; //* которые будут записываться в неопределенном количестве в строку аргументов
}
const numberArray = max(2, 5, 9, 4, 5, 7, 3);
//* Есть ограничения в использовании Rest parametr =>
//* 1. Rest  параметр всегда должен быть в конце аргументов функции или в деструктуризации
//* 2. Rest параметр выдаст ошибку если мы установим несколько  rest  параметров
console.log('numberArray =>>', numberArray);
