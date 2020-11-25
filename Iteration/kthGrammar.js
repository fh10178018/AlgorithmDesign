/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 * 方法不错，迭代也不行，换一种方法
 */
var kthGrammar = function (N, K) {
  let res = '0'
  while (N--) {
    res = res + bu(res)
  }
  return res[K - 1]
};
// 计算部位数，返回的是对应二进制
const bu = str => {
  let len = str.length
  let fan = '0b' + ('1').repeat(len)
  let res = (fan ^ ('0b' + str)).toString(2)
  let len2 = res.length
  return ('0').repeat(len - len2) + res
}
console.log(kthGrammar(30, 3))