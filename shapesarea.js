'use strict'

class Shape {
       
  constructor(options) {
    this.options = options
  }

  getArea() {
      let shape = new Shape.Shapes[this.constructor.name](this.options)
      let area = shape.getArea()
      return area; 
  }
  
}
Shape.Shapes = Shape.Shapes || {};
module.exports.Shape = Shape;

class Triangle extends Shape {
    constructor(options) {
      Shape.Shapes.Triangle = Triangle;
      super(options)
      this.width = options.width;
      this.height = options.height;
    }
    getArea() {
      return 0.5 * this.width * this.height;
    }
}
module.exports.Triangle = Triangle;

class Rectangle extends Shape {
    constructor(options) {
      Shape.Shapes.Rectangle = Rectangle;
      super(options)
      this.width = options.width; 
      this.height = options.height;
    }
    getArea() {
      return this.width * this.height;
    }
}
module.exports.Rectangle = Rectangle;

class Square extends Shape {
    constructor(options) {
      Shape.Shapes.Square = Square; 
      super(options)
      this.width = options.width;
      this.height = options.height;
    }
    getArea() {
      return  Math.pow(this.width,2) 
    }
}
module.exports.Square = Square;

