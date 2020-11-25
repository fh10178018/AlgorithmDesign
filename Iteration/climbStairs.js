/**
 * @param {number} n
 * @return {number}
 * 逻辑其实本质上是和斐波那契数是大体相同的
 * 记忆化迭代
 */
var climbStairs = function (n) {
  if (n == 0 || n == 1 || n == 2) return n
  const sum = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    sum.push(sum[i - 1] + sum[i - 2])
  }
  return sum[n]
};