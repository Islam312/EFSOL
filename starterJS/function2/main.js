let userName = 'Islam';
let age = 23;

function hello() {
  console.log(`Hi, ${userName}! Have a nice day!`);
}

hello();

function ageControl() {
  if (age > 18) {
    console.log(`Hi man!You are ${age}`);
  }
}

ageControl();

const data = [
  {
    name: 'Islam',
    userName: 'islam_dev',
  },
  {
    userName: 'kayfaRik',
    server: 'qwerty',
    host: 'localhost',
  },
];

data
  .filter((val) => val.name)
  .map((val) => val.userName)
  .forEach((val) => console.log('val =>>', val)); //* без ошибки и underfined извлечь данные с username
