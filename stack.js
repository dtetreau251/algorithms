class Stack {
  constructor() {
    this.data = [];
  }

  // Remove push onto the stack
  push(record) {
    this.data.push(record);
  }

  // Remove from the top of the stack
  pop() {
    return this.data.pop();
  }

  // Look at the top of the stack, without removing
  peek() {
    return this.data[this._lastIdx()];
  }

  // "Private" method
  _lastIdx() {
    return this.data.length - 1;
  }
}