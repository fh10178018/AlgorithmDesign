/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const len = T.length
  const res = new Array(len).fill(0)
  for (let i = len-2; i >= 0; i--) {
    for (let j = i + 1; j < len; j += res[j]) {
      if (T[i] < T[j]) {
        res[i] = j - i
        break
      }
      else if (res[j] === 0) {
        res[i] = 0
        break
      }
    }
  }
  return res
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))