/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  if (target == '0000' && deadends.includes('0000') !== -1) return -1
  const hash = {}
  deadends.forEach(item => {
    hash[item] = 1
  })
  const queue = []
  queue.push('0000')
  hash['0000'] = 1
  let count = 0
  while (queue.length !== 0) {
    let len = queue.length
    while (len-- > 0) {
      const item = queue.shift()
      if(item === target) return count
      const oldNums = item.split('')
      for (let j = 0; j< 4; j++) {
        const newNums = [...oldNums]
        const newNums1 = [...oldNums]
        const num = Number(newNums[j])
        newNums[j] = (num + 9) % 10 // 该位减1操作
        let str = newNums.join('')
        if (!hash[str]) {
          hash[str] = 1
          queue.push(str)
        }
        newNums1[j] = (num + 11) % 10 //该位加1操作
        str= newNums1.join('')
        if (!hash[str]) {
          hash[str] = 1
          queue.push(str)
        }
      }
    }
    count++
  }
  return -1
};
console.log(openLock([],'0202'))