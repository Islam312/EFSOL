var money = +prompt('Магазин мороженного предлает:\nмаленький стакан: 10грн\nбольшой стакан: 25грн');
function calc(money) {
    if (money < 10) {
        return 'у вас не хватает денег!';
    }
    else if (money < 25) {
        var cash = money - 10;
        return "\u0412\u0430\u0448 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0441\u0442\u0430\u043A\u0430\u043D \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0433\u043E ".concat(cash !== 0 ? "\u0412\u0430\u0448\u0430 \u0441\u0434\u0430\u0447\u0430: ".concat(cash, " \u0433\u0440\u043D") : '');
    }
    else if (money >= 25) {
        var cash = money - 25;
        return "\u0412\u0430\u0448 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0430\u043A\u0430\u043D \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0433\u043E ".concat(cash !== 0 ? "\u0412\u0430\u0448\u0430 \u0441\u0434\u0430\u0447\u0430: ".concat(cash, " \u0433\u0440\u043D") : '');
    }
}
console.log(calc(money));
