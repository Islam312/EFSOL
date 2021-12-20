'use strict';
const createObj = function (login, email, password) {
  return {
    login,
    email,
    password,
    show() {
      console.log('login =>>', login);
      console.log('email =>>', email);
      console.log('password =>>', password);
    },
  };
};

const pers1 = createObj('islam_dev', 'alyshbekov96@gmail.com', 123456);

pers1.show();

delete pers1.login;

pers1.show();
