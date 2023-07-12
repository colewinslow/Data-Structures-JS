# Data Structures: Hash Maps

## Overview

A hash map, also known as a hash table or associative array, is a data structure that allows for efficient insertion, deletion, and retrieval of key-value pairs. It provides a way to store and access data using keys as unique identifiers.

Hash maps have the following key characteristics:

- **Key-Value Pairs**: Each element in a hash map consists of a key-value pair. The key is used to uniquely identify the element, and the value is the associated data.

- **Hash Function**: A hash map uses a hash function to convert the key into an index or a hash code. This index is used to determine the location in the underlying data structure, typically an array or a dynamically resizing array.

- **Collision Handling**: Collisions occur when two or more keys produce the same hash code. Hash maps employ collision resolution techniques, such as chaining (using linked lists) or open addressing (probing), to handle collisions and store multiple values for the same hash code.

- **Fast Access**: Hash maps provide fast access to values based on their keys. The time complexity for insertion, deletion, and retrieval operations in hash maps is generally O(1) on average, making them highly efficient.

## Collision Handling

Collisions occur in hash maps when two or more keys produce the same hash code. Hash maps employ collision resolution techniques to handle collisions and store multiple values for the same hash code. Two common collision resolution techniques are:

### Chaining

Chaining is a collision resolution technique that uses linked lists to handle collisions. In this approach, each bucket in the hash map is associated with a linked list. When a collision occurs, the colliding key-value pair is added to the linked list at the corresponding bucket.

Chaining allows multiple values with the same hash code to be stored in the same bucket, maintaining the efficiency of constant time for average case operations. When retrieving a value, the linked list associated with the bucket is traversed to find the desired key-value pair.

If the hash map is poorly designed, and many keys produce the same hash code, the linked lists in the buckets can become long. This can lead to degraded performance, as the time complexity for retrieval becomes proportional to the length of the linked list (O(n) in the worst case, where n is the number of elements in the linked list).

### Open Addressing

Open addressing is an alternative collision resolution technique that aims to store colliding key-value pairs within the same array, without using linked lists. When a collision occurs, the algorithm searches for an alternative location (probing) within the array to store the key-value pair.

There are different probing strategies in open addressing, including linear probing, quadratic probing, and double hashing. These strategies determine how the alternative locations are calculated when a collision occurs.

Open addressing allows for efficient retrieval of values with constant time complexity, as there are no linked lists to traverse. However, the efficiency depends on maintaining a low load factor (the ratio of the number of elements to the size of the hash map). If the load factor becomes too high, the chances of collisions increase, leading to more probing and potentially longer retrieval times.

It's important to choose an appropriate hash function and implement collision resolution techniques that suit the specific requirements of the application to minimize collisions and ensure efficient performance.

## Hash Maps in JavaScript

In JavaScript, hash maps can be implemented using the built-in `Map` object or by creating custom implementations using objects or classes.

The `Map` object in JavaScript provides a way to create and manipulate hash maps. It offers methods like `set(key, value)` to insert a key-value pair, `get(key)` to retrieve a value by its key, `has(key)` to check if a key exists, `delete(key)` to remove a key-value pair, and more.

Custom hash map implementations can be created using objects or classes in JavaScript. These custom implementations would require defining appropriate methods for insertion, retrieval, deletion, and collision handling.

## Time and Space Complexity

The time complexity of hash map operations is generally O(1) on average. This means that the time it takes to insert, delete, or retrieve a value from a hash map does not depend on the size of the map and remains constant.

However, in the worst-case scenario, when there are many collisions, the time complexity can degrade to O(n), where n is the number of elements in the hash map. This can occur when the hash function poorly distributes the keys or when the hash map becomes densely populated.

The space complexity of a hash map depends on the number of key-value pairs stored in it. In general, it is O(n), where n is the number of elements.

It's important to note that the performance of hash maps can be affected by factors such as the quality of the hash function, the size of the underlying array, and the distribution of keys.
