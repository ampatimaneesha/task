var chai = require('chai'); 
var expect = chai.expect;
var Add= require('../app.js');

describe('add', () => {
    it('should return sum of numbers', () => {
        expect(Add("2,13,3" )).to.equal(18);
        console.log(Add("2,13,3"));
      });
  });
  describe('add', () => {
    it('should return sum of numbers', () => {
        expect(Add("2,13,14" )).to.equal(29);
        console.log(Add("2,13,14"));
      });
  });
  describe('add', () => {
    it('should return sum of numbers', () => {
        expect(Add("2,13,14,19" )).to.equal(48);
        console.log(Add("2,13,14,19"));
      });
  });