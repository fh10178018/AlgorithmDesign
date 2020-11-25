/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n == 0) return 1
  return x * myPow(x, n - 1)
};
console.log(myPow(2, 10))