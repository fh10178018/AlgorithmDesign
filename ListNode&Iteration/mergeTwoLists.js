// 合并有效序列的迭代

const mergeTwoLists = (l1, l2) => {
  const addHeadRes = new ListNode(0)
  let cur = addHeadRes
  while (l1 !== null || l2 !== null) {
    if (l1 == null) {
      cur.next = l2
      l2 = null
    }
    else if (l2 == null) {
      cur.next = l1
      l1 = null
    }
    else if (l2.val >= l1.val) {
      cur.next = l1
      l1 = l1.next
    }
    else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  return addHeadRes.next
}