export class LinkedListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  export class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new LinkedListNode(value);
  
      // Se ainda não há um head, o novo nó será o head.
      if (!this.head) {
        this.head = newNode;
  
        return this;
      }
  
      // Inserir o novo nó ao fim da lista.
      const currentNode = this.head;
      while(currentNode.next)
        currentNode = currentNode.next;
  
      currentNode.next = newNode;
  
      return this;
    }
  
    prepend(value) {
      // Tornar o novo nó o head da lista.
      const newNode = new LinkedListNode(value, this.head);
      this.head = newNode;
  
      return this;
    }
    
    removeFirstReferenceByValue(value) {
      if (!this.head) {
        return this;
      } else if (this.head.value == value) {  
        this.head = this.head.next;  
        return this;  
      }  
  
      const currentNode = this.head;  
      const previousNode = null;
      
      while (currentNode != null && currentNode.value != value) {  
        previousNode = currentNode;  
        currentNode = currentNode.next;  
      }  
  
      if (currentNode == null) {  
        return this;  
      }
  
      previousNode.next = currentNode.next;
      return this;
    }
  }