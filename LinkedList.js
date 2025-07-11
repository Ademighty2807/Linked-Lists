// node main.js 
// to run the code on terminal

// LinkedList.js

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    const countNodes = (node) => {
      if (node === null) return 0;                  // Base case: end of list
      return 1 + countNodes(node.nextNode);         // Recursive step: count this node + the rest
    };
  
    return countNodes(this.head);
  }
  

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head === null) return null;
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    const getNodeAt = (node, i) => {
      if (node === null || i < 0) return null;       // Base case: end of list or invalid index
      if (i === 0) return node;                      // Found the node at target index
      return getNodeAt(node.nextNode, i - 1);        // Recursive step: go to the next node
    };
  
    return getNodeAt(this.head, index);
  }

  pop() {
    if (this.head === null) return null;

    if (this.head.nextNode === null) {
      const popped = this.head;
      this.head = null;
      return popped;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    return current;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    const search = (node, index) => {
      if (node === null) return null;             // Base case: end of list and not found
      if (node.value === value) return index;     // Found the value
      return search(node.nextNode, index + 1);    // Recursive step: move to next node
    };
  
    return search(this.head, 0);
  }
  

  toString() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  }

  insertAt(value, index) {
    const insert = (node, i) => {
      if (i === 0) {
        const newNode = new Node(value);
        newNode.nextNode = node;
        return newNode; // Return new node to be connected by previous node
      }
  
      if (node === null) return null; // Index out of bounds
  
      node.nextNode = insert(node.nextNode, i - 1);
      return node; // Return the unchanged node so the chain remains intact
    };
  
    this.head = insert(this.head, index);
  }
  

  removeAt(index) {
    const removeNode = (node, i) => {
      if (node === null) return null; 
  
      if (i === 0) {
        return node.nextNode;
      }
  
      node.nextNode = removeNode(node.nextNode, i - 1);
      return node;
    };
  
    this.head = removeNode(this.head, index);
  }
  
}

export { LinkedList };