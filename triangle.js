let Shape = require('./shapesarea.js');

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
module.exports = Triangle;
