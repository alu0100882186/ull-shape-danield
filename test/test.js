var Triangle = require('../triangle.js');
var Square = require('../square.js');
var Rectangle = require('../rectangle.js');

describe("getArea", function() {
  it("must compute the triangle area correctly", function() {
    let a = new Triangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
});
