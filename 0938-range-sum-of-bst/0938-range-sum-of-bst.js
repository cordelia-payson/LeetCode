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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  
  let total = 0;
  
  var step = function(node) {
    if (node.val >= low && node.val <= high) {
      total = total + node.val;
    }
    if (node.left) {
      step(node.left);
    }
    if (node.right) {
      step(node.right);
    }
  };
  step(root);
  return total;
};