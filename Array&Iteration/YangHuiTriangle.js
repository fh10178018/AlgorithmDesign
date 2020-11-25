/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const res = []
  for (let i = 0; i < numRows; i++) {
    if (i == 0) {
      res.push([1])
      continue
    }
    const rowRes = new Array(i + 1)
    for (let j = 0; j < Math.ceil((i + 1) / 2); j++) {
      if (j === 0) {
        rowRes[j] = rowRes[i - j] = 1
      } else {
        rowRes[j] = rowRes[i - j] = res[i - 1][j - 1] + res[i - 1][j]
      }
    }
    res.push(rowRes)
  }
  return res
};