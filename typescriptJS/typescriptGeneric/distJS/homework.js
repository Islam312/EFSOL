var AddToDictionary = (function () {
    function AddToDictionary() {
    }
    Object.defineProperty(AddToDictionary.prototype, "getValue", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddToDictionary.prototype, "setValue", {
        set: function (value) {
            if (!value) {
                console.log('Значение не должно быть пустым1');
            }
            else {
                this._value = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddToDictionary.prototype, "getKey", {
        get: function () {
            return this._key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddToDictionary.prototype, "setKey", {
        set: function (key) {
            if (!key) {
                console.log('Значение не должно быть пустым2');
            }
            else {
                this._key = key;
            }
        },
        enumerable: false,
        configurable: true
    });
    return AddToDictionary;
}());
var MyDictionary = (function () {
    function MyDictionary() {
        var _this = this;
        this._data = [];
        this.getValue = function (key) {
            var _a;
            return (_a = _this._data.find(function (item) { return item.getKey == key; })) === null || _a === void 0 ? void 0 : _a.getValue;
        };
        this.getDescription = function (key) {
            var _a;
            return (_a = _this._data.find(function (item) { return item.getKey == key; })) === null || _a === void 0 ? void 0 : _a.describe;
        };
    }
    MyDictionary.prototype.addToDictionary = function (key, value, description) {
        var entry = new AddToDictionary();
        entry.setKey = key;
        entry.setValue = value;
        entry.describe = description;
        this._data.push(entry);
    };
    return MyDictionary;
}());
var dictionary = new MyDictionary();
dictionary.addToDictionary('key1', 123, 'password1');
dictionary.addToDictionary('key2', 321, 'password11');
dictionary.addToDictionary('key3', 132, 'password111');
dictionary.addToDictionary('key4', 312, 'password1111');
console.log(dictionary.getDescription('key1'));
console.log(dictionary.getValue('key2'));
console.log(dictionary.getDescription('key4'));
var dictionary1 = new MyDictionary();
dictionary1.addToDictionary('key1', true, 'password1');
dictionary1.addToDictionary('key2', true, 'password2');
dictionary1.addToDictionary('key3', false, 'password3');
dictionary1.addToDictionary('key4', false, 'password4');
console.log(dictionary1.getDescription('key1'));
console.log(dictionary1.getValue('key2'));
console.log(dictionary1.getDescription('key4'));
