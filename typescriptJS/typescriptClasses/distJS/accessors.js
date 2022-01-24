var Rectangle = (function () {
    function Rectangle() {
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            if (width < 0) {
                this._width = 0;
            }
            else {
                this._width = width;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            if (height < 0) {
                this._height = 0;
            }
            else {
                this._height = height;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "getArea", {
        get: function () {
            return this._width * this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var newRectangle = new Rectangle();
newRectangle.height = 5;
newRectangle.width = 15;
console.log(newRectangle.getArea);
