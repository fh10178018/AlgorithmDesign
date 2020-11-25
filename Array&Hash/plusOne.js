/**
 * @param {number[]} digits
 * @return {number[]}
 * 转成数字运算，会面零数据超出范围，而溢出，所以不能转成数据计算
 */
var plusOne = function (digits, i = digits.length - 1, status = 1) {
  if (status) {
    let item = digits[i] + 1
    if (item > 9) {
      digits[i] = 0
      if (i == 0) return [1, ...digits]
      else return plusOne(digits, --i, 1)
    } else {
      digits[i] += 1
      return digits
    }
  }
};
console.log(plusOne([0, 9, 9]))