var expect = require('chai').expect;
var addNum=require('../src/index')

describe('Test index.js', function() {
  describe('Test Addnum function', function() {
    it('The result is the sum of the two numbers.', function() {
       expect(addNum(1,2)).to.be.equal(3);
    });
  });
});