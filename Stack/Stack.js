/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.array = new Array()
  this.sortList = new Array()
  this.hash = {}
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.array.push(x)
  if (this.sortList.length === 0) this.sortList.push(x)
  else if(this.sortList.length === 1) {
    if (this.sortList[0] > x) this.sortList.unshift(x)
    else this.sortList.push(x)
  } else {
    if (this.sortList[0] > x) this.sortList.unshift(x)
    else {
      for (let i = 1; i< this.sortList.length;i++) {
        if (this.sortList[i] > x) {
          this.sortList.splice(i,0, x)
          break
        }
      }
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.length !== 0 ) {
    let a = this.array.shift()
    this.sortList.splice(this.sortList.indexOf(a),1)
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.array[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.sortList[0]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */