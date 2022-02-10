var chai = require('chai'); 
var expect = chai.expect;
var Add= require('../app.js');

describe('test4', () => {
    it('should return sum  begining with delimiters', () => {
        expect(Add("//;\n13;4;14;7" )).to.equal(38);
        console.log(Add("//;\n13;4;14;7"));
      });
      it('should return sum of numbers', () => {
        expect(Add("//;\n13;4;14;7;14;7;3" )).to.equal(62);
        console.log(Add("//;\n13;4;14;7;14;7;3"));
      });
      it('should return sum ', () => {
        expect(Add("//;\n13;4;14;7;23;29;13" )).to.equal(103);
        console.log(Add("//;\n13;4;14;7;23;29;13" ));
      });
  });