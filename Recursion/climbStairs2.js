// i使用来记录已走层数，n代表需要达到的层数
var climb = function (n, memory = [0, 1, 2]) {
  if (n == 0 || n == 1 || n == 2) return n
  if (n < 0) return 0
  memory[n] = climb(n - 1) + climb(n - 2)
  return memory[n]
};
/**
 * @param {number} n
 * @return {number}
 * 可行，但是不知道为什么还是超时
 * 推荐算法采用迭代，在Iteration中
 */
var climbStairs = function (n) {
  return climb(n)
}
