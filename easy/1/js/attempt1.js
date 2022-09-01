var nnn = [-1,-2,-3,-4,-5];

var twoSum = function(nums, target) {
    // nums.sort((a, b) => {return a - b;}).reverse();
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

console.log(twoSum(nnn, -8));