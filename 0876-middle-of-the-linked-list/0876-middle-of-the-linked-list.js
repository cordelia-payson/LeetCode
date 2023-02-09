/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let length = 0;
  let node = head;
  
  while (node.next) {
    length++;
    node = node.next;
  }
  
  let mid = Math.ceil(length / 2);
  
  let midNode = head;
  while (mid) {
    mid = mid - 1;
    midNode = midNode.next;
  }
  return midNode;
};