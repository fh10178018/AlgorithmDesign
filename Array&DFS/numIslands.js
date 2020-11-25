/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const xLen = grid[0].length
  const yLen = grid.length
  if (yLen === 0) return 0
  const dx = [1, -1, 0, 0]
  const dy = [0, 0, -1, 1]
  const queue = [] // 宽度优先搜索用来搜索岛屿
  let res = 0
  for (let i = 0; i < yLen; i++) {
    for (let j = 0; j < xLen; j++) {
      if (grid[i][j] === '1') { // 还没走过
        res++
        dfs(grid, i, j)
      }
    }
  }
  return res
};

const dfs = (grid, x, y, yLen = grid.length, xLen = grid[0].length) => {
  if (x >= 0 && y >= 0 && x < yLen && y < xLen) {
    if (grid[x][y] === '1') {
      grid[x][y] = '0'
      dfs(grid, x - 1, y)
      dfs(grid, x, y - 1)
      dfs(grid, x + 1, y)
      dfs(grid, x, y + 1)
    }

  }
}
console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]))