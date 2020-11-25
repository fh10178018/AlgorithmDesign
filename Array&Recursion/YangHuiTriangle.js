/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = []
  let i = 0
  while (++i <= numRows) {
    let j = 0, item = []
    while (++j <= i) {
      item.push(sum(i, j))
    }
    res.push(item)
  }
  return res
};
const sum = (i, j) => {
  if (j === 1 || i === j) return 1
  return sum(i - 1, j) + sum(i - 1, j - 1)
}