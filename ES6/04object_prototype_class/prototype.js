//* Прототипы
//* прототипирование основной инструмент "наследования" в JavaScript
//* Расмотрим три вида создание протатипа
//* 1. Object.setPrototypeOf() в ES6

// const animal = {
//   say() {
//     console.log(`${this.name} have voice ${this.voice}`);
//   },
// };

// const dog = {
//   name: 'dog',
//   voice: 'woof',
// };
// Object.setPrototypeOf(dog, animal); //* к объекту dog присваивается прототип объекта animal
//* Данный метод очень влияет на производительность кода
//* Поэтому данный метод почти не используется
// dog.say();

//* 2. Object.create()
//* Напишем функцию "типа" конструктор для такого подхода
// function animal1(name, voice) {
//   const result = Object.create(animal); //* создаем пустой объект и определяем метод объекта animal как прототип
//   result.name = name;
//   result.voice = voice;
//   return result;
// }

// const dog = animal1('dog', 'woof');
// dog.say();
//*  но еще есть более локаничный метод использование функций конструкторов в прототипировании

//* 3. .prototype - использование ключевого слова  new
function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}
Animal.prototype.say = function () {
  console.log(`${this.name} have voice ${this.voice}`);
};

const dog = new Animal('dog', 'woof');
dog.say();
