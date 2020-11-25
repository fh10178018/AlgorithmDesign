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
        grid[i][j] = '0'
        queue.push([i, j])
        while (queue.length !== 0) {
          const [x, y] = queue.shift()
          for (let z of [0, 1, 2, 3]) {
            const newX = dx[z] + x
            const newY = dy[z] + y
            // console.log([newX, newY], [x, y])
            if (newX >= 0 && newY >= 0 && newX < yLen && newY < xLen) {
              if (grid[newX][newY] === '1') {
                queue.push([newX, newY])
                grid[newX][newY] = '0'
              }
            }
          }
        }
      }
    }
  }
  return res
};
console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]))