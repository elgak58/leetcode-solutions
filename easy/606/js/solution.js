/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
 var tree2str = function(root) {
  var result = "";
  result += `${root.val}`;    
  if(root.left !== null){
    result += `(${tree2str(root.left)})`;
  } else {
    if(root.left !== null || root.right !== null){
      result += `()`;
    }
  }
  if (root.right !== null){
    result += `(${tree2str(root.right)})`;
  }
  return result;
};