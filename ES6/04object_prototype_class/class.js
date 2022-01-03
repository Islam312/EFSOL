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
