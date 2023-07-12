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

  // Traverse the linked list and execute a callback function on each node
  traverse(callback) {
    let currentNode = this.head;
    while (currentNode !== null) {
      callback(currentNode.data);
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

// Traversing the linked list
console.log("Traversing the Linked List:");
linkedList.traverse((data) => {
  console.log(data);
});
