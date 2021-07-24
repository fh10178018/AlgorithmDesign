/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//   return nums.sort((a, b) => Math.abs(a) - Math.abs(b)).map(item => Math.pow(item, 2))
// };

var sortedSquares = function (nums) {
  let i = 0, j = nums.length - 1;

  let res = [];

  if (j === 0) return [];

  while (i <= j) {
    const leftNum = Math.pow(nums[i], 2), rightNum = Math.pow(nums[j], 2);
    if (leftNum > rightNum) {
      res = [leftNum, ...res];
      i++;
    } else {
      res = [rightNum, ...res];
      j--;
    }
  }

  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))