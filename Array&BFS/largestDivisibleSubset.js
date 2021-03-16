/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 超时，不推荐
// var largestDivisibleSubset = function (nums) {
//   const len = nums.length
//   if (nums.length <= 1) return nums
//   let max = 0;
//   let res = []
//   nums.sort((a, b) => a - b).forEach(item => {
//     const queue = []
//     queue.push([item])
//     while (queue.length !== 0) {
//       const cur = queue.shift()
//       if (cur.length > max) { res = cur; max = cur.length }
//       const judgement = cur[cur.length - 1]
//       let index = nums.indexOf(judgement)
//       for (let i = index + 1; i < len; i++) {
//         if (judgement % nums[i] === 0 || nums[i] % judgement === 0) {
//           queue.push([...cur, nums[i]])
//         }
//       }
//     }
//   })
//   return res
// };

var largestDivisibleSubset = function (nums) {
  if (nums.length <= 1) return nums
  nums = nums.sort((a, b) => a - b)
  const len = nums.length
  const dp = new Array(len)
  dp[0] = [nums[0]]
  let maxLen = 1, maxArr = dp[0]
  for (let i = 1; i < len; i++) {
    let cur = 0, ca = [];
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        if (dp[j].length > cur) {
          cur = dp[j].length
          ca = dp[j]
        }
      }
      dp[i] = [...ca, nums[i]] //复制并新增构成新的集合
      if (dp[i].length > maxLen) { //找数量最大的集合
        maxLen = dp[i].length
        maxArr = dp[i]
      }
    }
  }
  return maxArr
}

console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]))