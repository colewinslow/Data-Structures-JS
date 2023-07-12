// Queue implementation using an array
class Queue {
  constructor() {
    this.queue = [];
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.queue.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  // Return the front element without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.queue.length;
  }

  // Clear the queue
  clear() {
    this.queue = [];
  }
}

// Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.size()); // 2
console.log(queue.isEmpty()); // false

queue.clear();
console.log(queue.isEmpty()); // true
