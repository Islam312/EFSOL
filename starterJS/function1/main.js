const number1 = +prompt('Enter first number!');
const number2 = +prompt('Enter second number!');
const symbol = prompt('Enter symbol: +, -, *, or /');

const calculate = (num1, num2, symbol) => {
  if (isNaN(num1) || isNaN(num2)) {
    alert('Неправильное заполнение полей');
    return;
  }
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        alert('На ноль нельзя делить!');
      }
    default:
      alert('Неправильное заполнение поля Символ!');
      return;
  }
};

console.log(
  'calculate(number1, number2, symbol); =>>',
  calculate(number1, number2, symbol)
);
