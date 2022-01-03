const person = {
  name: {
    first: 'islam',
    last: 'Alyshbekov',
  },
  email: 'alyshbekov96@gmail.com',
  age: 24,
  developer: true,
  getPersonality() {
    console.log(
      `Hello, ${this.name.first} ${this.name.last}. You are${
        this.developer ? '' : 'not'
      } developer!`
    );
  },
};
//* Шаблонные строки это альтернатива обычной конкатенации, код выглядит  локанично и понятно!
person.getPersonality()
