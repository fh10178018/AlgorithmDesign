/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const len = nums.length
  if (len === 0) return []
  const res = []
  let left = 0, right = 1
  while (1) {
    if (nums[right] === undefined) {
      if (right - left === 1 && nums[left] !== undefined) res.push(`${nums[left]}`)
      break
    }
    while (nums[right] - nums[left] === right - left) {
      right++
    }
    if (--right !== left) res.push(`${nums[left]}->${nums[right]}`)
    else res.push(`${nums[left]}`)
    left = ++right
    right++
  }
  return res
};
console.log(summaryRanges([0, 1, 2, 4, 5, 7, 8]))