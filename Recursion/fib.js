/**
 * @param {number} N
 * @return {number}
 * 纯递归计算，速度会慢，有可能会超出时间
 * 推荐算法采用迭代，在Iteration中
 */
var fib = function (N) {
  if (N == 0) return 0
  if (N == 1) return 1
  return fib(N - 1) + fib(N - 2)
};