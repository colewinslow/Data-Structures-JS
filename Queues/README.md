# Data Structures: Queues

## Overview

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It represents a collection of elements in which elements are added at one end (rear) and removed from the other end (front). Queues are used to model scenarios where the order of processing is important.

Queues have the following key characteristics:

- **Enqueue**: Adding an element to the queue is called enqueue, and it is done at the rear of the queue.

- **Dequeue**: Removing an element from the queue is called dequeue, and it is done from the front of the queue.

- **First-In-First-Out (FIFO)**: The element that has been in the queue the longest is the first one to be removed.

- **Dynamic Size**: Queues can grow or shrink dynamically as elements are enqueued or dequeued. They do not have a fixed size like arrays.

## Queues in JavaScript

In JavaScript, queues can be implemented using arrays or custom classes. The built-in Array object provides methods such as `push` and `shift` to enqueue and dequeue elements, respectively. However, using arrays for queues may not be the most efficient approach for large-scale applications, as array resizing can be costly.

Custom queue implementations can be created using classes or objects in JavaScript. These implementations would typically include methods for enqueue, dequeue, checking if the queue is empty, determining the size of the queue, and accessing the front element.

## Time and Space Complexity

The time and space complexity of queue operations depend on the specific operation:

- **Enqueue**: Adding an element to the rear of the queue takes constant time.

- **Dequeue**: Removing an element from the front of the queue takes constant time.

- **Front**: Accessing the front element of the queue takes constant time.

- **isEmpty**: Checking if the queue is empty takes constant time.

- **Size**: Determining the size (number of elements) of the queue takes constant time.

The space complexity of a queue is proportional to the number of elements in the queue.

It's important to note that queues are optimized for efficient insertion and removal of elements at the ends. If you need to access or modify elements in the middle of the queue frequently, other data structures like linked lists may be more appropriate.
