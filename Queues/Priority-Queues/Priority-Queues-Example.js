// Priority Queue
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Get the parent index of a given index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index of a given index
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get the right child index of a given index
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swap two elements in the priority queue
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Enqueue an element with a priority
  enqueue(element, priority) {
    const newNode = { element, priority };
    this.heap.push(newNode);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    const parentIndex = this.getParentIndex(index);
    if (
      parentIndex >= 0 &&
      this.heap[index].priority < this.heap[parentIndex].priority
    ) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  // Dequeue the element with the highest priority
  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }
    const highestPriorityElement = this.heap[0].element;
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return highestPriorityElement;
  }

  heapifyDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let highestPriorityIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].priority <
        this.heap[highestPriorityIndex].priority
    ) {
      highestPriorityIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].priority <
        this.heap[highestPriorityIndex].priority
    ) {
      highestPriorityIndex = rightChildIndex;
    }

    if (highestPriorityIndex !== index) {
      this.swap(index, highestPriorityIndex);
      this.heapifyDown(highestPriorityIndex);
    }
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Get the size of the priority queue
  size() {
    return this.heap.length;
  }
}

// Usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);

console.log(priorityQueue.dequeue()); // Task 2
console.log(priorityQueue.dequeue()); // Task 1
console.log(priorityQueue.dequeue()); // Task 3

console.log(priorityQueue.isEmpty()); // true
console.log(priorityQueue.size()); // 0
