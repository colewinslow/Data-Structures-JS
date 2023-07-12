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
  }

  // Add a node at the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Reverse the linked list
  reverse() {
    let prevNode = null;
    let currNode = this.head;
    let nextNode = null;

    while (currNode !== null) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.head = prevNode;
  }

  // Print the linked list values
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

// Usage
const linkedList = new LinkedList();
linkedList.prepend(5);
linkedList.prepend(4);
linkedList.prepend(3);
linkedList.prepend(2);
linkedList.prepend(1);

console.log("Original Linked List:");
linkedList.print();

linkedList.reverse();

console.log("Reversed Linked List:");
linkedList.print();
