//* let scope

function let1() {
  //* let не разрешает объявлять не в своей области видимости
  // console.log('let i:', i); //*cant find name
  // console.log('let test:', test);  //*cant find name

  for (let i = 0; i < 10; i++) {
    let test = i;
  }
  //* let не разрешает объявлять не в своей области видимости
  // console.log('let i:', i); //*cant find name
  // console.log('let test:', test); //*cant find name
}

let1();

//* let решает проблему с тем что мы не можем дважды объявлять пременную
function let2() {
  let a = 10;
  // let a = 20; //* и не будет никакой ошибки
  console.log('a: ', a);
}

let2();

//*корректно работает с  callback функциями

function let3() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log('i: ', i); //* ответ:  0 1 2 3 4
    }, 1000);
  }
}

let3();
