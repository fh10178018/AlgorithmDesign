/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const hash = {}
  const nums = get(n)
  const queue = []
  queue.push(n)
  hash[n] = 1
  let res = 0
  while (queue.length !== 0 ) {
    res++
    let len = queue.length
    while (len--) {
      const cur = queue.shift()
      for (let i = 0;i < nums.length;i++) {
        let next = cur - nums[i]
        if (next < 0) break
        if (next == 0) return res
        if (hash[next]) continue
        hash[next] = 1
        queue.push(next)
      }
    }
  }
  return n
};
const get  = (num) => {
  const res = new Array()
  let count = 0
  while (++count) {
    const item = count * count
    if (item > num) return res
    res.push(item)
  } 
}
console.log(numSquares(12))