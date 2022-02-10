const Add = function (numbers){
  let delimeter=","
  if(numbers.match(/\/\//)){
    const delPrefix = numbers.split("//")[1]
    delimeter = delPrefix[0]
    numbers = delPrefix.substring(1).replace(/\n/,"");
    const regexp = new RegExp(`${delimeter}`)
    numbers = numbers.replace(regexp, delimeter)
    console.log(numbers);
  }
 if(numbers.match(/\n/)){
    numbers = numbers.replace(/\n/g,",");
    
  }
let nums=numbers.split(delimeter).filter(i => i.length>0)
nums = nums.map(i=>parseInt(i));{

  if(nums.length ==0){
    return 0;
  }
  if(nums.length ==1){
    return -1;
  }
  
    if ( nums.length>1 ){
      let sum = 0;
      for ( let i = 0; i < nums.length; i++){
        sum += nums[i];
      }
      return sum;
    }
    
}
  }
  

  module.exports = Add;
