// https://leetcode.com/problems/add-two-numbers/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
   
var addTwoNumbers = function(l1, l2) {
    let overflow = 0;
    let first = l1;
    let second = l2;
    let headNode = null;
    let currNode = null;
      
    while (first || second || overflow) {
        let sum = 
            (first !== null ? first.val : 0)
            + (second !== null ? second.val : 0)
            + overflow;
          
        overflow = Math.floor(sum / 10);
          
        if (!headNode) {
            currNode = new ListNode(sum % 10);
            headNode = currNode;
        }
        else {
            currNode.next = new ListNode(sum % 10);
            currNode = currNode.next;
        }
          
        first = first !== null ? first.next : null;
        second = second !== null ? second.next : null;
    }
      
    return headNode;   
};