
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var myInput = [-10,-3,0,5,9];
var level = Math.floor(Math.log(myInput.length)/Math.log(2));
var first = true;

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

function arr2BST(nums){
  var root = new TreeNode(null, undefined, undefined);
  var index = Math.round(nums.length / 2) - 1;
  if(index !== -1){
    var thisVal = nums[index];
    var leftArr = nums.slice(0, index);
    var rightArr = nums.slice(index+1, nums.length);
    root.val = thisVal;
    if(leftArr.length !== 0){
      root.left = arr2BST(leftArr);
    }
    if(rightArr.length !== 0){
      root.right = arr2BST(rightArr);
    }    
  } 
  return root;
}

// function treePreorderTraverse(tree){
//   level++;
//   var output = [];
//   output.push(tree.val);
//   if(tree.left.val !== null){
//     output.push(treePreorderTraverse(tree.left));
//   }
//   if(tree.right.val !== null){
//     output.push(treePreorderTraverse(tree.right));
//   }
//   for (var i = 0; i < level; i++){
//     output = [].concat.apply([], output);
//   }
//   return output;
// }

function treePreorderTraverse(tree){
  // level++;
  var output = [];
  if(first){
    output.push(tree.val);
    first = false;
  }
  if(tree.left !== null){output.push(tree.left.val);}
  if(tree.right !== null){output.push(tree.right.val);}
  
  if(tree.left !== null){output.push(treePreorderTraverse(tree.left));}
  if(tree.right !== null){output.push(treePreorderTraverse(tree.right));}

  return output;
}


var sortedArrayToBST = function(nums) {
  var BST = arr2BST(nums);
  return treePreorderTraverse(BST);
};


var output = sortedArrayToBST(myInput)
for (var i = 0; i < level; i++){
  output = [].concat.apply([], output);
}
console.log(output);
console.log(level);

