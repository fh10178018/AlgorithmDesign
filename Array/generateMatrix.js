/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const spiral = new Array(n);
  for (let i = 0; i < n; i++) {
    spiral[i] = new Array(n)
  }
  let min = 0, col = 0, row = 0, max = n - 1, len = n * n; // 移动状态
  for (let i = 1; i < len + 1; i++) {
    spiral[row][col] = i
    if (row == min && col < max) {
      col = col + 1
    } else if (col == max && row < max) { // 拐点
      row = row + 1
    } else if (row == max && col > min) { // 拐点
      col = col - 1
    } else if (col == min && row > min) { // 拐点
      row = row - 1
    }
    if (row - 1 == min && col == min) { // 缩短环数
      min = min + 1
      max = max - 1
    }
  }
  return spiral
};

console.log(generateMatrix(3))