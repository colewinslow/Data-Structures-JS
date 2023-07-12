// Linked List Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a node at the end of the linked list
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a node at the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Insert a node at a specific position in the linked list
  insertAt(data, position) {
    if (position === 0) {
      this.prepend(data);
      return;
    }

    const newNode = new Node(data);
    let currentNode = this.head;
    let previousNode = null;
    let currentPosition = 0;

    while (currentPosition < position && currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentPosition++;
    }

    if (currentNode === null) {
      this.append(data);
    } else {
      previousNode.next = newNode;
      newNode.next = currentNode;
    }
  }

  // Remove the first occurrence of a node with the given data from the linked list
  remove(data) {
    if (this.head === null) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null && currentNode.data !== data) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode !== null) {
      previousNode.next = currentNode.next;
      if (currentNode === this.tail) {
        this.tail = previousNode;
      }
    }
  }
}

// Usage
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAt(15, 2);

// Print the values of the linked list
let currentNode = linkedList.head;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}

linkedList.remove(10);
console.log(linkedList.head.data); // 5
console.log(linkedList.tail.data); // 20
