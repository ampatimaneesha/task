var chai = require('chai'); 
var expect = chai.expect;
var Add= require('../app.js');

//testcase  1
describe('Function tests', () => {
  it('should return zero for empty string', () => {
      expect(Add("")).to.equal(0);  
      console.log(Add(""));         
  });
  //test case2
  it('should return -1 if it is one number', () => {
    expect(Add("1")).to.equal(-1); 
    console.log(Add("1"));  
            
    });
    //test case 3
    it('should return sum of numbers', () => {
      expect(Add("2, 3" )).to.equal(5);
      console.log(Add("2,3"));
  
});
});