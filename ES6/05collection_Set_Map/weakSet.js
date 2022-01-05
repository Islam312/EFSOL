//* тоже самое что и weakmap
//* принимает только объкты в значение и удаляет дублирующие объекты
//* имеет метод только  has add
const users = [{ name: 'Jhon' }, { name: 'Elena' }, { name: 'Mike' }];
users.splice(1, 1); //* Если в массиве удаяется элемент  то в weakSet автоматически освобождает память
let weakSet = new WeakSet();

weakSet.add(users[0]).add(users[1]);

console.log('weakSet.has(users[0]) =>>', weakSet.has(users[0]));
console.log('weakSet.has(users[0]) =>>', weakSet.has(users[1]));
