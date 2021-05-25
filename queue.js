class Queue {
    constructor() {
      this.queue = [];
    }
  
    add(k) {
      this.queue.unshift(k);
    }
  
    remove() {
      return this.queue.pop();
    }
  }