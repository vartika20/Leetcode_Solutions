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

 function traverseTillMid(head){
    let temp = head;
    let count =0;
    while(temp.next !== null){
        count++;
        temp=temp.next
    }
    return count;
 }

var middleNode = function(head) {
    let count = traverseTillMid(head)/2;
    let temp = head;
    while(count>0){
        temp=temp.next;
        count--;
    }
    return temp;
};