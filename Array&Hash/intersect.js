/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const hash = {}
  const res = []
  nums1.forEach(item => {
    if (hash[item] == undefined) hash[item] = 1;
    else hash[item]++
  })
  nums2.forEach(item => {
    if (hash[item] !== undefined && hash[item]-- > 0) {
      res.push(item)
    }
  })
  return res
};
console.log(intersect([1, 2, 2, 1], [2, 2]))