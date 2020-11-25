/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let res = null, cur = head
  while (cur !== null) {
    const temp = cur
    cur = cur.next
    temp.next = res
    res = temp
  }
  return res
};