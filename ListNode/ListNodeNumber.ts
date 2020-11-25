export default class ListNode {
  value: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.value = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}