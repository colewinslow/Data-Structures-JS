// Heap implementation using an array
class MinHeap {
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

  // Swap two elements in the heap
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Insert an element into the heap
  insert(element) {
    this.heap.push(element);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    const parentIndex = this.getParentIndex(index);
    if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  // Get the minimum element in the heap
  peek() {
    return this.heap[0];
  }

  // Remove and return the minimum element from the heap
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }
    const minElement = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return minElement;
  }

  heapifyDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.heapifyDown(smallestIndex);
    }
  }
}

// Usage
const heap = new MinHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(15);

console.log(heap.peek()); // 5
console.log(heap.extractMin()); // 5
console.log(heap.peek()); // 10
