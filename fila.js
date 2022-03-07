export class QueueNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  export class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(value) {
  const newNode = new QueueNode(value);
      if(this.last !== null) {
        this.last.next = newNode;
      }
      
      this.last = newNode;
  
      if(this.first === null){
        this.first = this.last;
      }
  
      return this;
    }
  
    dequeue() {
      if(this.first === null) {
        return null;
      }
  
      const firstNode = this.first;
      this.first = this.first.next;
  
      if(this.first === null){
        this.last = null;
      }
  
      return firstNode;
    }
  
    peek() {
      if(this.first === null) {
        return null;
      }
  
      return this.first.data;
    }
  
    isEmpty() {
      return this.first === null;
    }
  }