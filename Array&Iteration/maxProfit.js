/**
 * @param {number[]} prices
 * @return {number}
 * 采用双指针滑块的方法，迭代搜寻
 */
var maxProfit = function (prices) {
  const len = prices.length;
  if (len <= 1) return 0
  let left = 0, right = 1;
  let sum = 0
  while (right < len) {
    if (prices[left] >= prices[right]) {
      right++;
      left++;
    } else {
      let curMaxPrice = prices[right]
      while (right < len && curMaxPrice < prices[++right]) {
        curMaxPrice = prices[right]
      }
      sum += (curMaxPrice - prices[left])
      left = right
      right++
    }
  }
  return sum
};