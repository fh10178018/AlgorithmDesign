/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
  if (root === null) return 0
  let res = 0
  const dfs = (root, len = 1) => {
    root.left && dfs(root.left, ++len)
    root.right && dfs(root.right, root.left ? len : ++len)
    if (len > res) {
      res = len
    }
  }
  dfs(root)
  return res
};