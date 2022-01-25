"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var trucks_1 = require("./trucks");
var Car = (function () {
    function Car(title, model) {
        this._model = model;
        this._title = title;
    }
    Object.defineProperty(Car.prototype, "getName", {
        get: function () {
            return this._title.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getModel", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
exports.Car = Car;
var CRV = new Car('Honda', 'CR-V');
console.log('CRV: ', CRV.getName);
var Volvo = new trucks_1.Trucks('Honda', 'CR-V');
console.log('Volvo: ', Volvo.getName);
console.log('Volvo: ', Volvo.getModel);
console.log('Volvo: ', Volvo.getLoadCapacity);
Volvo.setLoadCapacity;
console.log(Volvo.getLoadCapacity);
