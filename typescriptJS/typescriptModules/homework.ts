import { Trucks } from './trucks';

export class Car {
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

const CRV = new Car('Honda', 'CR-V');

console.log('CRV: ', CRV.getName);

const Volvo = new Trucks('Honda', 'CR-V');

console.log('Volvo: ', Volvo.getName);
console.log('Volvo: ', Volvo.getModel);
console.log('Volvo: ', Volvo.getLoadCapacity);
Volvo.setLoadCapacity;
console.log(Volvo.getLoadCapacity);
