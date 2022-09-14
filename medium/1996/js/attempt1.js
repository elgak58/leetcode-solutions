function flatten(arr) {
  const flat = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

function quickSort(arr){
  var result;
  var pivotIndex = 0;
  var pivot = arr[pivotIndex];
  var i = 0, j = arr.length;
    while(i < j){
      do{
        i++;
      } while(i < arr.length-1 && arr[i] < pivot);
      do {
        j--;
      } while(j > 0 && arr[j] > pivot);

      if(i < j){      
        arr[i] = arr.splice(j, 1, arr[i])[0]; // swap arr[i] & arr[j] 
      } else if(i > j){ 
        arr[pivotIndex] = arr.splice(j, 1, arr[pivotIndex])[0]; // swap pivot & arr[j]
      } 
      else if(i === j){
        if(arr[j] < pivot){
          arr[pivotIndex] = arr.splice(j, 1, arr[pivotIndex])[0]; // a[0] is pivot position
        }
      }
    }

    var left = arr.slice(0, j);
    left = left.length > 1 ? quickSort(left): left;
    var right = arr.slice(j+1, arr.length);
    right = right.length > 1 ? quickSort(right): right;

    left.push(arr[j]);
    result = left.concat(right);

  return result;
}

/**
 * @param {number[][]} properties
 * @return {number}
 */
 var numberOfWeakCharacters = function(properties) {
  var numOfWeak = 0;
  var count = 0;
  for(var i = 0; i < properties.length; i++){
    count++;
    console.log(count);
    for(var j = 0; j < properties.length; j++){
      if (i !== j){
        if (properties[i][0] < properties[j][0]){
          if(properties[i][1] < properties[j][1]){
            numOfWeak++;
            break;
          }
        }    
      }        
    }
  }
  return numOfWeak;
};

  var arr2 = [[1,5],[10,4],[4,3]];
  // arr = flatten(arr);
  // var r = quickSort(arr);
  // var r = flatten(quickSort(arr));
  // console.log(r[199999]);

// console.log(numberOfWeakCharacters(arr));