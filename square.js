let Shape = require('./shapesarea.js');
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
module.exports = Square;
