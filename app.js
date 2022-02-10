const Add = function (numbers){
let nums=numbers.split(",").filter(i => i.length>0)
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
