/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// const mergeTwoLists = (l1, l2) => {
//   const res = new ListNode(0)
//   var merge = function (l1, l2, newList = res) {
//     if (l1 == null && l2 == null) return res.next
//     else if (l1 !== null && l2 == null) {
//       newList.next = l1
//       return res.next
//     }
//     else if (l1 == null && l2 != null) {
//       newList.next = l2
//       return res.next
//     }
//     else {
//       if (l1.val <= l2.val) {
//         newList.next = l1
//         return merge(l1.next, l2, newList.next)
//       } else {
//         newList.next = l2
//         return merge(l1, l2.next, newList.next)
//       }
//     }
//   }
//   return merge(l1, l2)
// }

const mergeTwoLists = (l1, l2) => {
  if (l1 == null) {
    return l2;
  }
  else if (l2 == null) {
    return l1;
  }
  else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
