const money: number = +prompt(
  'Магазин мороженного предлает:\nмаленький стакан: 10грн\nбольшой стакан: 25грн'
);

function calc(money: number): string {
  if (money < 10) {
    return 'у вас не хватает денег!';
  } else if (money < 25) {
    let cash = money - 10;
    return `Ваш маленький стакан мороженого ${
      cash !== 0 ? `Ваша сдача: ${cash} грн` : ''
    }`;
  } else if (money >= 25) {
    let cash = money - 25;

    return `Ваш большой стакан мороженого ${
      cash !== 0 ? `Ваша сдача: ${cash} грн` : ''
    }`;
  }
}
console.log(calc(money));
