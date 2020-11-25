/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 * 方法不错，但是栈溢出，我们该换一下迭代
 */
var kthGrammar = function (N, K, res = '0') {
  if (N === 0) return res[K - 1]
  else {
    return kthGrammar(N - 1, K, res + bu(res))
  }
};
// 计算部位数，返回的是对应二进制
const bu = str => {
  let len = str.length
  let fan = '0b' + ('1').repeat(len)
  let res = (fan ^ ('0b' + str)).toString(2)
  let len2 = res.length
  return ('0').repeat(len - len2) + res
}
console.log(kthGrammar(3, 3))