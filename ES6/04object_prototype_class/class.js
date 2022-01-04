//* Class в JavaScript  это синтаксический сахар для функции конструктора

class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  say() {
    console.log(`${this.name} have voice ${this.voice}`);
  }
}

const dog = new Animal('dog', 'woof');

class Bird extends Animal {
  //* ключевое слово extends наследует все прототипы родительского класса
  //* class Bird это дочерний класс class Animal

  constructor(name, voice, canFly) {
    //* Если мы хотим добавить свойства определеному классу
    //* то ключевое слово super() обязательно - это вызывает родительский конструктор
    super(name, voice);
    this.canFly = canFly;
  }
  //* а также перезаписывать родительский прототип не изменяя родительский прототип
  say() {
    console.log(
      `${this.name} have voice ${this.voice} ${this.canFly ? 'can fly!' : '!'}`
    );
  }
}

const duck = new Bird('duck', 'quack', true);
dog.say();
duck.say();

//* Нововведение ES 2019
//* Использование переменных в теле класса

class Increment {
  count = 0; //* дает возможность создавать переменные

  inc() {
    this.count++;
    console.log('this.count =>>', this.count);
  }
}

const incValue = new Increment();
incValue.inc();

//* Использование ключевого слова static

class Decrement extends Increment {
  static count = 5; //*  с помощью static мы можем на прямую обращаться с наружи не делая экземпляра класса
  static dec() {
    //* Статистические функции работают только со статистическими свойствами
    this.count--;
    console.log('this.count =>>', this.count);
  }
}

console.log('Decrement.count =>>', Decrement.count);
Decrement.count = 3;
Decrement.dec();
