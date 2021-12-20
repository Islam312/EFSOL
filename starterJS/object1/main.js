const person1 = {
  firstName: 'Islam',
  lastName: 'Alyshbek uulu',
  sayHello() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  },
};

person1.sayHello();
