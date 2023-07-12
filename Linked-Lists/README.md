# Data Structures: Linked Lists

## Overview

A linked list is a linear data structure that consists of nodes linked together in a sequence. Each node contains a value and a reference (or link) to the next node in the sequence. Linked lists are dynamic data structures that allow for efficient insertion and deletion of elements at any position in the list.

Linked lists have the following key characteristics:

- **Nodes**: Each node in a linked list contains a value and a reference to the next node. The first node is called the head, and the last node typically points to null, indicating the end of the list.

- **Dynamic Size**: Linked lists can grow or shrink dynamically as elements are inserted or deleted. They do not have a fixed size like arrays.

- **Efficient Insertion and Deletion**: Linked lists provide efficient insertion and deletion operations, especially when adding or removing elements at the beginning or the end of the list. These operations can be performed in constant time O(1) by updating the appropriate references.

- **Sequential Access**: Linked lists offer sequential access to elements, meaning that traversing the list requires visiting each node starting from the head and following the links until reaching the desired node.

## Linked Lists in JavaScript

In JavaScript, linked lists can be implemented using custom classes or objects. Each node in the linked list can be represented as an object with properties for the value and the reference to the next node.

Linked lists can be singly linked, where each node only has a reference to the next node, or doubly linked, where each node has references to both the next and the previous nodes. Doubly linked lists allow for more efficient traversal in both directions, but they require additional memory to store the previous references.

## Time and Space Complexity

The time and space complexity of linked list operations depend on the specific operation:

- **Insertion at the Head**: Inserting a node at the beginning of a linked list takes constant time O(1) as it involves updating a few references.

- **Insertion at the Tail**: Inserting a node at the end of a linked list takes O(n) time complexity in the worst case, where n is the number of elements in the list, as it requires traversing the entire list to reach the end.

- **Insertion at a Given Position**: Inserting a node at a specific position in a linked list takes O(n) time complexity in the worst case, as it requires traversing the list to find the desired position.

- **Deletion**: Deleting a node from a linked list takes O(n) time complexity in the worst case, as it requires traversing the list to find the node to be deleted.

- **Searching**: Searching for a value in a linked list takes O(n) time complexity in the worst case, as it requires traversing the list to find the desired value.

The space complexity of a linked list is O(n), where n is the number of elements in the list. This space is required to store the nodes and their corresponding values.

Keep in mind that linked lists are efficient for insertion and deletion operations, but they have slower access times compared to arrays when directly accessing elements by index.
