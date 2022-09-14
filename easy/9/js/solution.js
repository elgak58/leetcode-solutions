/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  var isPal = true, stringX = String(x), arr = stringX.split('');
  if(arr.length % 2 !== 0){
      arr.splice(Math.floor(arr.length/2), 1);
  }
  for(var i = 0, j = arr.length-1; i < j; i++, j--){
      if (arr[i] !== arr[j]){
          var isPal = false;
          break;
      }
  }
  return isPal;
};