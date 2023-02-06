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
 * @return {boolean}
 */
var depth = function(node) {
  if (!node) {
    return -1;
  }
  return 1 + Math.max(depth(node.left), depth(node.right));
};
  
var isBalanced = function(root) {
  if (!root) return true;
  
  let diff = Math.abs(depth(root.left) - depth(root.right));
  
  if (diff > 1) {
    return false;
  }
  let left = isBalanced(root.left);
  let right = isBalanced(root.right);
  return left && right;
};