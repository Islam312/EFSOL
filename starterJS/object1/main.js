const createUser = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    sayHello() {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    },
  };
};

let user1 = createUser('Islam', 'Alyshbek uulu');
user1.sayHello();
