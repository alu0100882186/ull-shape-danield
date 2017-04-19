'use strict'

class Shape {
       
  constructor(options) {
    Object.assign(this, options);
  }

  getArea() {
      let shape = new Shape.Shapes[this.constructor.name](this.options)
      let area = shape.getArea()
      return area; 
  }
  
}
Shape.Shapes = Shape.Shapes || {};
module.exports = Shape;

