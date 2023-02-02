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
 * @return {TreeNode}
 */
var invertTree = function(root) {

  if (!root) {
    return null;
  }
  
  var switchChildren = function(parent) {
    if (!parent.left && !parent.right) {
      return;
    }
    let tempLeft = parent.right;
    parent.right = parent.left;
    parent.left = tempLeft;
    
    if (parent.left) {
      switchChildren(parent.left);
    }
    if (parent.right) {
      switchChildren(parent.right);
    }
    return parent;
  };
  
  switchChildren(root);
  return root;
};