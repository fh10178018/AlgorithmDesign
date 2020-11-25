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
var swapPairs = function (head) {
  if (!head) return null
  if (!head.next) return null
  // 类似 let temp = a ; a = b ; b = temp
  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
};