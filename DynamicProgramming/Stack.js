/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.array = new Array()
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  // 每一次放一个比它小的上一个值
  this.array.unshift([x, Math.min(this.array[0] ? this.array[0][1] : Infinity, x)])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.array.shift()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.array[0][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.array[0][1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
const obj  = new MinStack()
obj.push(4)
obj.push(-1)
obj.push(0)
obj.push(3)
obj.pop()
console.log(obj.top())
obj.pop()
console.log(obj.getMin())