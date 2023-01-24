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
var reverseList = function(head) {
    // get child of head
      // get grandchild
    // swap
    //continue until no more next 
    
    if (head === null || head.next === null) {
        return head;
    }

    
    var reversed = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversed;
};