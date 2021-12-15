// let btn = document.getElementsByClassName('button');

// btn.forEach((element, index) => {
//   console.log('element =>>', element)
//   console.log(index);
// });

let listHotel = document.querySelector('.list-hotel');

// console.log('listHotel =>>', listHotel);

// listHotel.onclick = function (e) {
//   console.log('e.target =>>', e.target);
// };
listHotel.addEventListener('click', function (e) {
  if (e.target.closest('.button')) {
    const addres = e.target.dataset.addres;
    console.log('address =>>', addres)
  }
});
