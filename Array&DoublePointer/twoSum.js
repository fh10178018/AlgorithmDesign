/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const length = numbers.length;
  numbers = numbers.sort((a, b) => a - b)
  for (let i = 0; i < length; i++) {
    let res = target - numbers[i]
    for (let j = i + 1; j < length; j++) {
      if (res === numbers[j]) {
        return [i + 1, j + 1]
      } else if (numbers[j] > res) {
        break
      }
    }
  }
};