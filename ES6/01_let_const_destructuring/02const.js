
//*----------------*/
//* const - константа
//* Если переменная объявлена через ключевое слово const
//* то эта не переменная не мутабельна, это правило действует
//* если значение переменной примитив(number, string, boolean, null, undefined)
const age = null;
//* age = 24; //* error => Uncaught TypeError: Assignment to constant variable.

const arr = [1, 1, 2, 3, 5, 8, 13, 21];
arr.splice(2, 0, 'islam', 'js');
console.log('arr =>>', arr); //* мы можем изменять const только когда работаем с объектами
//* изменять струтуру в этом заключается мутабельность const
//* но важным аспектом является то что мы не можем перераспределять
//* например

// arr = ['islam', 'js']; //* Uncaught TypeError: Assignment to constant variable.
