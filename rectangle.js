let Shape = require('./shapesarea.js');
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
module.exports = Rectangle;
