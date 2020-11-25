/**
 * @param {number[]} prices
 * @return {number}
 * 采用双指针滑块的方法，迭代搜寻
 */
var maxProfit = function (prices) {
  const len = prices.length;
  if (len <= 1) return 0

  // 0: 持有现金
  // 1: 持有股票
  // 状态转移：0 -> 1 ->0 -> 1
  // 标识当前状态拥有的最大的现金金额数
  const dp = new Array(len)
  for (var i = 0; i < len; i++) { //二维长度为2
    dp[i] = new Array(2)
  }
  // 如果什么都不做，就一直为0
  dp[0][0] = 0
  // 如果初始持有股票，将欠一定的股价钱
  dp[0][1] = -prices[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[len - 1][0]
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))