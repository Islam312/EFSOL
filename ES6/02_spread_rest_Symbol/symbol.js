//* Symbol - 7 тип  => нужен для того чтобы задавать уникальные ключи
const symbol = Symbol('demo');
const otherSymbol = Symbol('demo');

console.log('symbol =>>', symbol);  //* Symbol(demo)
console.log('otherSymbol =>>', otherSymbol)   //* Symbol(demo)

console.log('symbol == otherSymbol =>>', symbol == otherSymbol)  //* false
console.log('symbol === otherSymbol =>>', symbol === otherSymbol)  //* false
//* Видим что присваивается одно и тоже значение и выводит одно и тоже в консоли
//* но они не равны это доказывает что Symbol это абсолютно уникальное значение