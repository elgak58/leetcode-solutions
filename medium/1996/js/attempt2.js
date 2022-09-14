// function flatten(arr) {
//   const flat = [];

//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       flat.push(...flatten(item));
//     } else {
//       flat.push(item);
//     }
//   });

//   return flat;
// }


function quickSort2D(arr){
  var result;
  var pivotIndex = 0;
  var pivot = arr[pivotIndex][0];
  var i = 0, j = arr.length;
    while(i < j){
      do{ i++; } while(i < arr.length-1 && arr[i][0] < pivot);
      do { j--; } while(j > 0 && arr[j][0] > pivot);

      if(i < j){      
        arr[i] = arr.splice(j, 1, arr[i])[0]; // swap arr[i][0] & arr[j][0] 
      } else if(i > j){ 
        arr[pivotIndex] = arr.splice(j, 1, arr[pivotIndex])[0]; // swap pivot & arr[j][0]
      } 
      else if(i === j){
        if(arr[j][0] < pivot){
          arr[pivotIndex] = arr.splice(j, 1, arr[pivotIndex])[0]; // a[0] is pivot position
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

function group(arr){ // take 2d array
  var grouping = [];
  var i = 0, j = 0, count = 0;
  while(j < arr.length){
    if(i !== j){
      if(arr[i][0] === arr[j][0]){
        grouping[count].push(arr[j][1]);
        j++;
      } else {
        count++;
        i = j;
      }
    } else {
      grouping.push([arr[i][1]]);
      j++;
    }
  }
  return grouping;
}

// function encode(arr){
//   var encoding = [], qty = [];
//   for(var i = 0; i < arr.length; i++){
//     encoding.push(findMax(arr[i]));
//     qty.push(arr[i].length);
//   }
//   return [encoding, qty];
// }

function numberOfWeakCharacters(properties) {
  properties = group(quickSort2D(properties).reverse());
  // console.log(properties);
  var numOfWeak = 0;
  var max = 0;
  // var i = 0, j = 0;
  for(var i = 0, j = 0; i < properties.length && j < properties.length - 1; i++){
  // while(i < properties.length){
      j = i + 1;
      var newMax = findMax(properties[i]);
      var max = newMax > max ? newMax : max;
      for(var k = 0; k < properties[j].length; k++){
          if(properties[j][k] < max){            
            numOfWeak++;            
          }
          // console.log([i, `(${properties[j][k]} < ${max})`, (properties[j][k] < max),properties[j][k], numOfWeak])
      }
      // i++;
  }
  return numOfWeak;
}


// function numberOfWeakCharacters(properties) {
//   properties = group(quickSort2D(properties).reverse());
//   console.log(properties);
//   var numOfWeak = 0;
//   var currentMax = 0;
//   for(var i = 0, j = 0; i < properties.length && j < properties.length - 1; i++){
//       j = i + 1;
//       var newMax = findMax(properties[i]);
//       currentMax = newMax > currentMax ? newMax : currentMax;
//       for(var k = 0; k < properties[j].length; k++){
//           if(properties[j][k] < currentMax){
//               numOfWeak++;
//           }
//       }
//   }
//   return numOfWeak;
// }














// function numberOfWeakCharacters(properties) {
//   properties = group(quickSort2D(properties));
//   var numOfWeak = 0; 
//   for(var i = 1, j; i < properties.length; i++){
//     j = i - 1;
//     var max = findMax(properties[i]);
//     for(var k = 0; k < properties[j].length; k++){      
//       if(max > properties[j][k]){
//         numOfWeak++;
//       }
//     }
//   }
//   return numOfWeak;
// };

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function largeArray(){
  var arr = [];
  for(var i = 1, j = 100000; i <= 100000 && j > 0; i++, j--){
    arr.push([i, j]);
  }
  return shuffle(arr);
}

// function loopTest(twoArr){
//   var encoded = twoArr[0];
//   var qty = twoArr[1];
//   var count = 0;
//   for(var i = 0; i < encoded.length; i++){
//     for(var j = i + 1; j < encoded.length; j++){
//       if(encoded[j] > encoded[i]){
//         count += qty[i];
//         break;
//       }
//     }
//   }
//   return count;
// }

// var arr = [[5,5],[6,3],[3,6]];  // answer 0
// var arr = [[2,2],[3,3]]  // answer 1
// var arr = [[1,5],[10,4],[4,3]];  // answer 1
// var arr = [[10,1],[5,1],[7,10],[4,1],[5,9],[6,9],[7,2],[1,10]]; // answer 4
var arr = [[896,595],[50,94],[354,880],[733,718],[784,379],[686,53],[39,194],[493,282],[288,482],[592,289],[139,661],[633,334],[946,282],[491,284],[686,258],[842,570],[146,884],[399,112],[445,232],[13,643],[662,419],[97,381],[844,886],[143,153],[504,783],[926,363],[62,575],[953,970],[500,160],[600,77],[882,64],[173,182],[433,553],[93,562],[563,301],[560,722],[784,466],[707,264],[802,147],[958,310],[537,214],[737,514],[236,471],[558,257],[694,884],[660,832],[17,424],[649,984],[506,122],[562,373],[29,994],[817,751],[916,42],[176,503],[250,405],[273,486],[798,466],[53,123],[222,96],[123,412],[664,823],[833,744],[29,446],[588,106],[357,257],[50,727],[576,398],[349,295],[11,292],[976,923],[22,237],[54,834],[890,287],[916,178],[283,885],[413,366],[381,115],[311,224],[188,204],[153,569],[688,805],[65,605],[716,105],[453,942],[140,457],[868,497],[303,760],[867,58],[270,702],[210,75],[767,337],[565,737],[742,320],[390,166],[668,84],[971,713],[362,1],[726,44],[436,254],[433,737],[405,353],[109,743],[702,515],[840,440],[759,950],[860,723],[979,433],[51,418],[58,470],[230,672],[505,147],[591,429],[932,465],[187,717],[516,27],[344,174],[1,958],[426,29],[712,317],[515,531],[228,621],[999,432],[338,618],[331,434],[423,623],[990,73],[734,704],[349,494],[435,902],[709,987],[607,690],[52,30],[629,198],[286,405],[830,627],[154,923],[432,466],[730,746],[665,149],[583,513],[501,729],[992,474],[237,44],[291,255],[159,128],[75,405],[813,419],[687,895],[676,147],[773,468],[639,64],[234,516],[570,166],[227,635],[470,489],[139,626],[924,472],[658,97],[680,749],[810,593],[76,561],[58,766],[507,114],[333,355],[936,666],[641,311],[806,699],[641,500],[198,607],[696,157],[87,743],[971,984],[177,57],[481,895],[869,480],[935,306],[561,279],[283,148],[969,805],[149,147],[115,988],[336,685],[636,51],[688,958],[546,828],[226,170],[664,199],[364,137],[773,54],[681,698],[389,274],[975,991],[234,583],[916,162],[812,478],[843,464],[364,94],[490,712],[14,378],[312,824],[198,927],[293,273],[184,737],[850,290],[792,592],[213,486],[196,707],[196,6],[99,804],[127,524],[189,198],[477,540],[328,366],[275,50],[764,483],[382,866],[860,562],[147,201],[916,299],[295,289],[564,344],[520,90],[183,551],[575,677],[234,997],[769,506],[80,740],[95,586],[110,56],[102,603],[169,716],[661,520],[177,940],[261,354],[37,798],[123,831],[751,109],[495,187],[857,788],[569,424],[245,629],[283,507],[533,428],[17,410],[2,712],[228,959],[678,2],[559,33],[528,410],[827,275],[413,924],[906,352],[930,148],[734,576],[675,387],[65,71],[551,529],[983,292],[870,187],[269,414],[529,868],[985,67],[391,340],[947,606],[741,553],[650,396],[278,21],[512,945],[323,475],[11,502],[790,62],[273,261],[992,426],[342,117],[899,46],[563,342],[196,549],[754,733],[527,655],[974,432],[901,821],[453,894],[494,932],[422,59],[225,514],[158,678],[243,115],[732,640],[732,500],[356,335],[240,887],[712,734],[359,72],[349,619],[675,585],[489,288],[160,659],[405,558],[686,704],[160,483],[852,404],[913,134],[78,531],[886,4],[464,745],[894,663],[865,864],[648,64],[649,974],[471,477],[833,127],[515,480],[190,339],[899,120]]; // answer 309
// var arr = largeArray(); // answer 0


// var RSArray = quickSort2D(arr).reverse(); // reversed sorted array
// var GRSArray = group(RSArray); // grouped reversed sorted array
// console.log(GRSArray);

console.log(numberOfWeakCharacters(arr));









// console.log(loopTest(twoArr));


// console.log(numberOfWeakCharacters(array));

// console.log(numberOfWeakCharacters(r));