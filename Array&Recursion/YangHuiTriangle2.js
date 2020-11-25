/**
 * @param {number} numRows
 * @return {number[]}
 * 但是会超时
 */
var getRow = function (numRows) {
  let i = 0
  let j = 0, item = []
  while (++j <= numRows) {
    item.push(sum(numRows, j))
  }
  return item
};
const sum = (i, j) => {
  if (j === 1 || i === j) return 1
  return sum(i - 1, j) + sum(i - 1, j - 1)
}