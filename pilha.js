export class StackNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new StackNode(value, this.top);
    this.top = newNode;

    return this;
  }

  pop() {
    if(this.top === null) {
      return null;
    }

    const lastNode = this.top;
    this.top = this.top.next;

    return lastNode;
  }

  peek() {
    if(this.top === null) {
      return null;
    }

    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}