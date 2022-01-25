class AddToDictionary<Tkey, Tvalue, Tdescription> {
  private _key: Tkey;
  private _value: Tvalue;
  public describe: Tdescription;

  get getValue(): Tvalue {
    return this._value;
  }
  set setValue(value: Tvalue) {
    if (!value) {
      console.log('Значение не должно быть пустым1');
    } else {
      this._value = value;
    }
  }
  get getKey(): Tkey {
    return this._key;
  }
  set setKey(key: Tkey) {
    if (!key) {
      console.log('Значение не должно быть пустым2');
    } else {
      this._key = key;
    }
  }
}

class MyDictionary<Tkey, Tvalue, Tdescription> {
  private _data: AddToDictionary<Tkey, Tvalue, Tdescription>[] = [];

  public addToDictionary(key: Tkey, value: Tvalue, description: Tdescription) {
    let entry = new AddToDictionary<Tkey, Tvalue, Tdescription>();
    entry.setKey = key;
    entry.setValue = value;
    entry.describe = description;
    this._data.push(entry);
  }
  public getValue = (key: Tkey): Tvalue | null => {
    return this._data.find((item) => item.getKey == key)?.getValue;
  };
  public getDescription = (key: Tkey): Tdescription | null => {
    return this._data.find((item) => item.getKey == key)?.describe;
  };
}

let dictionary = new MyDictionary<string, number, string>();

dictionary.addToDictionary('key1', 123, 'password1');
dictionary.addToDictionary('key2', 321, 'password11');
dictionary.addToDictionary('key3', 132, 'password111');
dictionary.addToDictionary('key4', 312, 'password1111');

console.log(dictionary.getDescription('key1'));
console.log(dictionary.getValue('key2'));
console.log(dictionary.getDescription('key4'));

let dictionary1 = new MyDictionary<string, boolean, string>();

dictionary1.addToDictionary('key1', true, 'password1');
dictionary1.addToDictionary('key2', true, 'password2');
dictionary1.addToDictionary('key3', false, 'password3');
dictionary1.addToDictionary('key4', false, 'password4');

console.log(dictionary1.getDescription('key1'));
console.log(dictionary1.getValue('key2'));
console.log(dictionary1.getDescription('key4'));
