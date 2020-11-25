/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N == 0 || N == 1) return N
  const sum = [0, 1]
  for (let i = 2; i <= N; i++) {
    sum.push(sum[i - 2] + sum[i - 1])
  }
  return sum(N)
};