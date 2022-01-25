class Car {
  private _title: string;
  private _model: string;

  constructor(title: string, model: string) {
    this._model = model;
    this._title = title;
  }
  public get getName() {
    return this._title.toUpperCase();
  }
  public get getModel() {
    return this._model;
  }
}
class Trucks extends Car {
  private _loadCapacity: number;
  constructor(title: string, model: string) {
    super(title, model);
  }
  get getLoadCapacity() {
    return this._loadCapacity;
  }
  set setLoadCapacity(load: number) {
    if (load <= 0) {
      this._loadCapacity = 0;
      console.log('Груза нет');
    }
    if (load > 1800) {
      console.log('Груз превышает допустимую норму!');

      this._loadCapacity = 1800;
    } else {
      console.log('Все хорошо!');
      this._loadCapacity = load;
    }
  }
}

const CRV = new Car('Honda', 'CR-V');

console.log('CRV: ', CRV.getName);

const Volvo = new Trucks('Honda', 'CR-V');

console.log('Volvo: ', Volvo.getName);
console.log('Volvo: ', Volvo.getModel);
console.log('Volvo: ', Volvo.getLoadCapacity);
Volvo.setLoadCapacity;
console.log(Volvo.getLoadCapacity);
