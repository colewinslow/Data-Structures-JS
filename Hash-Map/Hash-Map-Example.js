// Hash Map implementation using an object
class HashMap {
  constructor() {
    this.map = {};
  }

  // Add a key-value pair to the hash map
  put(key, value) {
    this.map[key] = value;
  }

  // Get the value associated with a given key
  get(key) {
    return this.map[key];
  }

  // Remove a key-value pair from the hash map
  remove(key) {
    delete this.map[key];
  }

  // Check if the hash map contains a given key
  contains(key) {
    return this.map.hasOwnProperty(key);
  }

  // Get all keys in the hash map
  keys() {
    return Object.keys(this.map);
  }

  // Get all values in the hash map
  values() {
    return Object.values(this.map);
  }

  // Clear the hash map
  clear() {
    this.map = {};
  }
}

// Usage
const hashMap = new HashMap();
hashMap.put("name", "John");
hashMap.put("age", 25);
hashMap.put("city", "New York");

console.log(hashMap.get("name")); // John
console.log(hashMap.contains("age")); // true

hashMap.remove("city");
console.log(hashMap.keys()); // [ 'name', 'age' ]
console.log(hashMap.values()); // [ 'John', 25 ]

hashMap.clear();
console.log(hashMap.keys()); // []
