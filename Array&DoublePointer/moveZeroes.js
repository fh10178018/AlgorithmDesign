/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  const length = nums.length
  let a = 0
  for (let i = 0; i < length; i++) {
    if (a === length - i) {
      break
    }
    if (nums[i] === 0) {
      nums.splice(i, 1)
      a++
      i--
      nums.push(0)
    }
  }
};

