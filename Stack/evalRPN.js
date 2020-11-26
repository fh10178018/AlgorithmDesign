/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []
  const compute = {'+':1, '-':1, '*':1,'/':1}
  while (tokens.length !== 0) {
    const item = tokens.shift()
    if (!compute[item]) {
      stack.push(item)
    } else {
      const a = stack.pop(), b = stack.pop()
      stack.push(parseInt(eval(b + item + a)))
    }
  }
  return stack[0] ? stack[0] : 0
};
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))