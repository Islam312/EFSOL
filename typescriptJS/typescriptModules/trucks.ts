import { Car } from "./homework";

 export class Trucks extends Car {
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

  
