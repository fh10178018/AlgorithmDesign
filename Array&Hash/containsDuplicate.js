/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hash = {}
  for (let i of nums) {
    if (hash[i] == null) hash[i] = 1
    else {
      if (++hash[i] >= 2) return true
    }
  }
  return false
};