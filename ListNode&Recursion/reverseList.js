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
 * 前置递归方法
 */
var reverseList = function (cur, prev = null) {
  if (cur === null) return prev
  let next = cur.next
  cur.next = prev
  return reverseList(next, cur)
};