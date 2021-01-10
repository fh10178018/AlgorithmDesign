/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const left = {
    '(':')',
    '{':'}',
    '[':']',
  }
  const array = s.split('')
  for (let item of array) {
    if (left[item]) {
      stack.push(item)
    } else {
      const item2 = stack.pop()
      if (left[item2] !== item) return false 
    }
  }
  if (stack.length === 0) return true
  else return false
}
console.log(isValid(""))