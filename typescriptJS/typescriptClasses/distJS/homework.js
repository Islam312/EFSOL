var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Trucks = (function (_super) {
    __extends(Trucks, _super);
    function Trucks(title, model) {
        return _super.call(this, title, model) || this;
    }
    Object.defineProperty(Trucks.prototype, "getLoadCapacity", {
        get: function () {
            return this._loadCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trucks.prototype, "setLoadCapacity", {
        set: function (load) {
            if (load <= 0) {
                this._loadCapacity = 0;
                console.log('Груза нет');
            }
            if (load > 1800) {
                console.log('Груз превышает допустимую норму!');
                this._loadCapacity = 1800;
            }
            else {
                console.log('Все хорошо!');
                this._loadCapacity = load;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Trucks;
}(Car));
var CRV = new Car('Honda', 'CR-V');
console.log('CRV: ', CRV.getName);
var Volvo = new Trucks('Honda', 'CR-V');
console.log('Volvo: ', Volvo.getName);
console.log('Volvo: ', Volvo.getModel);
console.log('Volvo: ', Volvo.getLoadCapacity);
Volvo.setLoadCapacity;
console.log(Volvo.getLoadCapacity);
