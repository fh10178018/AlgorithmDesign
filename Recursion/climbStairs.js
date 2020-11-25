/**
 * @param {number} n
 * @return {number}
 * 可行但是会超出时间
 * 推荐算法采用迭代，在Iteration中
 */
var climbStairs = function (n) {
  if (n == 0 || n == 1 || n == 2) return n
  return climbStairs(n - 1) + climbStairs(n - 2)
};