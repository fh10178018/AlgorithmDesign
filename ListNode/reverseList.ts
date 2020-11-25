class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


// 通过堆栈的方式
// function reverseList(head: ListNode | null): ListNode | null {
//   let last = head
//   const queue = []
//   if(last === null) return head
//   // 便利链表，让链表指针指向最后一个
//   while (last) {
//     queue.push(last.val)
//     last = last.next
//   }
//   const res = new ListNode()
//   let first = res
//   while(queue.length !== 0){
//     const item = queue.pop()
//     first.next = new ListNode(item)
//     first = first.next 
//   }
//   return res.next
// };

// 通过双指针的方法
const reverseList = (head: ListNode | null): ListNode | null => {
  let cur = null
  let pre = head
  while (pre.next !== null) {
    cur = new ListNode(pre.val, cur)
  }
  return cur
}