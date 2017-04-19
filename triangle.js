let Shape = require('./shapesarea.js');

class Triangle extends Shape {
    constructor(options) {
      super(options)
      this.width = options.width;
      this.height = options.height;
    }
    getArea() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
