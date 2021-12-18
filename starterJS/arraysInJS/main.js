const arrayNumber = [];
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 101);
  arrayNumber[i] = randomNumber;
}

const maxNumber = Math.max(...arrayNumber);
const minNumber = Math.min(...arrayNumber);
console.log('arrayNumber =>>', arrayNumber);
console.log('maxNumber =>>', maxNumber);
console.log('minNumber =>>', minNumber);
