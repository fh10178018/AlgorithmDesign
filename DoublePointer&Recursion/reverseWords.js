/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(' ').map(item => reverseString(item)).join(' ')
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s, res = s.split(''), left = 0, right = s.length - 1) {
  if (left >= right) {
    return res.join('')
  }
  let temp = res[left]
  res[left] = res[right]
  res[right] = temp
  return reverseString(s, res, left + 1, right - 1)
};
console.log(reverseWords("Let's take LeetCode contest"))
