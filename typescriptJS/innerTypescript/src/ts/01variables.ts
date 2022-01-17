//* - var scope

var i = 1;
console.log('i', i);

function var1() {
  console.log('var i:', i);
  console.log('var test:', test); //* var проблематичная объявление переменных

  for (var i = 0; i < 10; i++) {
    var test = i;
  }

  console.log('var i:', i); //*10
  console.log('var test:', test); //*9
}

//* при работе var существует 2 области видимости
//* глобальная
//* на уровне функций

var1();

//* вторая проблема переменная var заключается в том что
//* может две абсолюно идентичные переменные и перетирать друг друга
function var2() {
  var a = 10;
  var a = 20; //* и не будет никакой ошибки
  console.log('a: ', a);
}

var2();

//* Третья проблема ==> проблема с  callback функциями

function var3() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log('i: ', i); //* ответ:  5 5 5 5 5
    }, 1000);
  }
}

var3();



