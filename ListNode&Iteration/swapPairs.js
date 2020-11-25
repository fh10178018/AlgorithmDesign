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
  if (!head) return head
  if (!head.next) return head
  const addHead = new ListNode('head', head)
  let left = addHead, right = addHead.next.next
  while (1) {
    console.log(left, right)
    const temp = left.next
    left.next = right
    temp.next = right.next
    right.next = temp
    left = temp
    if (!temp.next || !temp.next.next) break
    right = temp.next.next
  }
  return addHead.next
};