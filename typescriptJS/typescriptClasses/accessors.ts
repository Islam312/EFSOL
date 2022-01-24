class Rectangle {
  private _width: number;
  private _height: number;

  public get width(): number {
    return this._width;
  }
  public set width(width) {
    if (width < 0) {
      this._width = 0;
    } else {
      this._width = width;
    }
  }
  public get height(): number {
    return this._height;
  }
  public set height(height) {
    if (height < 0) {
      this._height = 0;
    } else {
      this._height = height;
    }
  }
  public get getArea() {
    return this._width * this._height;
  }
}

const newRectangle = new Rectangle();

newRectangle.height = 5;
newRectangle.width = 15;
console.log(newRectangle.getArea);
