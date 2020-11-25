/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const visited = new Map()
  const dfs = (head) => {
    if (head === null) return null
    if (visited.has(head)) return visited.get(head)
    let copy = new Node(head.val)
    visited.set(head, copy)
    copy.next = dfs(haed.next)
    copy.random = dfs(head.random)
    return copy
  }
  return dfs(head)
};