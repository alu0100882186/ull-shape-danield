'use strict'

class Shape {
       
  constructor(options) {
    Object.assign(this, options);
  }

  getArea() {
      let shape = new Shape.Shapes[this.constructor.name](this)
      return shape.area()
  }
  
}
Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;

