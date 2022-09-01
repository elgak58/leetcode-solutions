/**
 * @param {string} s
 * @return {number}
 */

 var romanToInt = function(str) {
  var dictionary = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000};
  var result = 0;
  if(1 <= str.length <= 15 && /i|v|x|l|c|d|m/.test(str.toLowerCase())){
    var prev = null;
    for(var i = 0; i < str.length; i++){      
      result += dictionary[str[i]];
      if(prev !== null && prev < dictionary[str[i]]){
          result -= 2*prev;
      }
      prev = dictionary[str[i]];
    } 
  } else {
    console.log("Invalid Input !");
  }
  return result;
};

var myInput = "III";
console.log(romanToInt(myInput));