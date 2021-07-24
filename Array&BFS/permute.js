/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const queue = [[]]
  const len = nums.length
  while (queue.length !== 0 && queue[0].length !== len) {
    const cur = queue.shift()
    for (let index of nums) {
      if (cur.indexOf(index) === -1) queue.push([...cur, index])
    }
  }
  return queue.length === 0 ? [] : queue
};