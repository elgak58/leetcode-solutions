// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val);
//   this.left = (left===undefined ? null : left);
//   this.right = (right===undefined ? null : right);
// }

function TreeNode(val, left, right) {
  this.val =  val;
  this.left = this.right = null;
}

// var sortedArrayToBST = function(nums) {
//   var index = Math.round(nums.length / 2) - 1;
//   var root = new TreeNode(nums[index], undefined, undefined);
//   var leftArr = nums.slice(0, index);
//   var rightArr = nums.slice(index+1, nums.length);
//   if(leftArr.length !== 0){root.left = sortedArrayToBST(leftArr);}
//   if(rightArr.length !== 0){root.right = sortedArrayToBST(rightArr);}    
//   return root;
// };

var sortedArrayToBST = function(nums) {
  if (nums.length < 1) return null
  var index = Math.round(nums.length / 2) - 1;
  var root = new TreeNode(nums[index]);
  var leftArr = nums.slice(0, index);
  var rightArr = nums.slice(index+1, nums.length);
  root.left = sortedArrayToBST(leftArr);
  root.right = sortedArrayToBST(rightArr);    
  return root;
};

myInput = [-10,-3,0,5,9];
console.log(sortedArrayToBST(myInput));
console.log("");