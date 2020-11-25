/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 三种方法
 */
// var rotate = function (nums, k) {
//   k = nums.length % k
//   while (k--) {
//     let item = nums.pop()
//     nums.unshift(item)
//   }
// };


// 该方法注意当K值大于nums时, 取去周期数, 该方法更快，因为提出了一些不必要的周期操作.而且循环周期应该也是没有的
var rotate = function (nums, k) {
  const len = nums.length
  const item = nums.splice(-k % len, k % len)
  nums.unshift(...item)
};

