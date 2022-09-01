/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  var result = null;
  if(nums.length >= 2 && nums.length <= 10e4){
      for(var i = 0; i < nums.length; i++){
          for(var j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
              result = [i, j];
              return result;
            }
          }
      }  
  }       
};

var myInput = [-1,-2,-3,-4,-5];
console.log(twoSum(myInput, -8));