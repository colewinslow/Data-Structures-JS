// Creating a set
const set = new Set();

// Adding elements to the set
set.add(1);
set.add("hello");
set.add(true);

console.log(set); // Set { 1, 'hello', true }

// Checking if an element exists in the set
console.log(set.has("hello")); // true

// Getting the size of the set
console.log(set.size); // 3

// Removing an element from the set
set.delete(1);

console.log(set); // Set { 'hello', true }

// Iterating over the elements of the set
set.forEach((value) => {
  console.log(value);
});

// Clearing the set
set.clear();

console.log(set); // Set {}
