# Data Structures: Stacks

## Overview

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. It represents a collection of elements in which elements are added and removed from the same end, known as the top of the stack. Stacks are commonly used in scenarios where the most recently added item is the first one to be removed.

Stacks have the following key characteristics:

- **Push**: Adding an element to the stack is called push, and it is done at the top of the stack.

- **Pop**: Removing an element from the stack is called pop, and it is also done from the top of the stack.

- **Last-In-First-Out (LIFO)**: The element that has been added most recently is the first one to be removed.

- **Dynamic Size**: Stacks can grow or shrink dynamically as elements are pushed or popped. They do not have a fixed size like arrays.

## Stacks in JavaScript

In JavaScript, stacks can be implemented using arrays or custom classes. The built-in Array object provides methods such as `push` and `pop` to manage elements in the stack.

JavaScript arrays can be used as stacks by utilizing these methods. Elements can be pushed onto the stack using the `push` method, and elements can be popped from the stack using the `pop` method. By using these methods in the appropriate order, you can achieve the desired stack behavior.

Custom stack implementations can also be created using classes or objects in JavaScript. These implementations would typically include methods for push, pop, checking if the stack is empty, determining the size of the stack, and accessing the top element.

## Time and Space Complexity

The time and space complexity of stack operations depend on the specific operation:

- **Push**: Adding an element to the stack takes constant time.

- **Pop**: Removing an element from the stack takes constant time.

- **Top**: Accessing the top element of the stack takes constant time.

- **isEmpty**: Checking if the stack is empty takes constant time.

- **Size**: Determining the size (number of elements) of the stack takes constant time.

The space complexity of a stack is proportional to the number of elements stored in it.

It's important to note that stacks are optimized for efficient push and pop operations. If you require more advanced operations, such as random access to elements, other data structures like arrays or linked lists may be more appropriate.
