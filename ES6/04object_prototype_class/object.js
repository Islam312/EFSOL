function createObj(x = 0, y = 0, prefix = '') {
  return {
    x,
    y,
    [prefix + 'z']: x + y,
    showValue() {
      console.log('x =>>', x);
      console.log('y =>>', y);
    },
  };
}
//* в ES6  у объектов можно сократить { x: x, y: y, } на { x, y }
//* также прописывать методы объектов без ключевого слова function
//* и прописывать ключи в виде префикса

const obj = createObj(1, 5, 'new');
obj.showValue();
console.log('obj =>>', obj);

const defaults = {
  host: 'localhost',
  status: 'admin',
  user: 'admin',
};
const options = {
  status: 'user',
  user: 'John',
  password: 'hash1234',
};
//* ES 2015
const result = Object.assign({}, defaults, options); //* Создание поверхностной копии, а не ссылку на объект
console.log('defaults =>>', defaults);
console.log('result =>>', result);

//* ES 2018
//* object spread operator
const port = 8080;
const resultSpreadOperator = { ...defaults, ...options, port, connect() {} }; //* эта конструкция более гибкая, чем Object.assign()
console.log('defaults =>>', defaults); //* как мы видим что начальный объект не изменяется за счет поверхностной копии объекта

console.log('resultSpreadOperator =>>', resultSpreadOperator);
