/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = {}
  for (let i in numbers) {
    i = Number(i)
    if (map[numbers[i]] === undefined) {
      map[target - numbers[i]] = i;
    } else {
      return [map[numbers[i]] + 1, i + 1]
    }
  }
};
twoSum([2, 7, 11, 15], 9)