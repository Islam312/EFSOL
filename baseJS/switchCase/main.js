//* Задание
//* Перепишите следующий код таким образом, чтобы вместо условия использовался тернарный
//* оператор. При этом поведение сценария не должно измениться.
// let x = 10;
// let y = 0;
// if (x > 5)
// y = 20;
// else
// y = 30;
// console.log(y);

let x = 10;
let y = 0;

x > 5 ? (y = 20) : (y = 30);
console.log('y =>>', y)

