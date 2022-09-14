/**
 * @param {number[][]} properties
 * @return {number}
 */

 function quickSort2D(arr){
  var result;
  var pivotIndex = 0;
  var pivot = arr[pivotIndex][0];
  var i = 0, j = arr.length;
  while(i < j){
      do {i++;} while (i < arr.length-1 && arr[i][0] < pivot);
      do {j--;} while (j > 0 && arr[j][0] > pivot);
  
      if(i<j){
          arr[i] = arr.splice(j, 1, arr[i])[0];
      } else if(i > j){
          arr[pivotIndex] = arr.splice(j, 1, arr[pivotIndex])[0];
      } else if(i === j){
          if(arr[j][0] < pivot){
              arr[pivotIndex] = arr.splice(j, 1, arr[pivotIndex])[0];
          }
      }
  }
  var left = arr.slice(0, j);
  left = left.length > 1 ? quickSort2D(left): left;
  var right = arr.slice(j+1, arr.length);
  right = right.length > 1 ? quickSort2D(right): right;
  
  left.push(arr[j]);
  result = left.concat(right);
  return result;
}

function findMax(arr){
  var max = 0;
  for(var i = 0; i < arr.length; i++){
      max = max > arr[i] ? max : arr[i];
  }
  return max;
}

function group(arr){
  var result = [];
  var i = 0, j = 0, count = 0;
  while(j < arr.length){
      if(i !== j){
          if(arr[i][0] === arr[j][0]){
              result[count].push(arr[j][1]);
              j++;
          } else {
              count++;
              i = j;
          }
      } else {
          result.push([arr[i][1]]);
          j++;
      }
  }
  return result;
}

var numberOfWeakCharacters = function(properties) {
  properties = group(quickSort2D(properties).reverse());
  var numOfWeak = 0;
  var max = 0;
  for(var i = 0, j = 0; i < properties.length && j < properties.length - 1; i++){
      j = i + 1;
      var newMax = findMax(properties[i]);
      var max = newMax > max ? newMax : max;
      for(var k = 0; k < properties[j].length; k++){
          if(properties[j][k] < max){
              numOfWeak++;
          }
      }
  }
  return numOfWeak;
};