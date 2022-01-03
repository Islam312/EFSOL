const calc = (num1 = 0, num2 = 0, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) return 'На ноль нельзя делить';
      return num1 / num2;
  }
};
console.log(' calc(3,6,"+") =>>', calc(3, 6, '+'));
console.log(' calc(3,6,"+") =>>', calc(3, 6, '-'));
console.log(' calc(3,6,"+") =>>', calc(3, 6, '*'));
console.log(' calc(3,6,"+") =>>', calc(3, 0, '/'));

//* Стрелочная функция это частичная альтернатива больше для анонимных функций,
//* гланым плюсом стрелочных функций является то что они не имеют собственного контекста
//* Например

const person = {
  name: {
    first: 'islam',
    last: 'Alyshbekov',
  },
  email: 'alyshbekov96@gmail.com',
  age: 24,
  developer: true,
  getPersonality() {
    setTimeout(function () {
      console.log('this.name.first =>>', this.name.first); //* undefined
      //* Контекстом this является window потому что находиться в глобальной функции setTimeout()
      //* Поэтому на выходе undefined
    }, 2000);
  },
  getPersonality1() {
    setTimeout(() => {
      console.log('this.name.first =>>', this.name.first);
      //* Стрелочная функция указывает на тот элемент где он открылся,
      //* по сути в данном при мере стрелочная функция заменяет
      //* методы call(), apply(), и в какой то мере bind()
    }, 2000);
  },
};
person.getPersonality();
person.getPersonality1();
