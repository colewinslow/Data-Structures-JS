const TestingArray = [1, 2, 9, 4, 5, 2, 7];
console.log("Starting Array", TestingArray);

//// push(): Adds one or more elements to the end of an array and returns the new length. ////

// TestingArray.push(8);

//// pop(): Removes the last element from an array and returns that element. ////

// TestingArray.pop();

//// unshift(): Adds one or more elements to the beginning of an array and returns the new length. ////

// TestingArray.unshift(123, 456, 789);

//// shift(): Removes the first element from an array and returns that element. ////

// const FirstElm = TestingArray.shift();
// console.log(FirstElm);

//// concat(): Combines two or more arrays and returns a new array.////

// console.log(TestingArray.concat(TestingArray));

//// join(): Joins all elements of an array into a string, optionally specifying a separator. ////

// console.log(TestingArray.join());

//// slice(): Extracts a portion of an array into a new array without modifying the original array. ////

// console.log("Slice", TestingArray.slice(3, 5));

//// splice(): Changes the content of an array by removing, replacing, or adding elements. ////

// console.log("Splice", TestingArray.splice(0, 5));

//// reverse(): Reverses the order of the elements in an array. ////

// console.log(TestingArray.reverse());

//// sort(): Sorts the elements of an array in place and returns the sorted array. ////

// console.log(TestingArray.sort());

//// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if not present. ////

// console.log(TestingArray.indexOf(9));

//// lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if not present. ////

// console.log(TestingArray.lastIndexOf(2));

//// includes(): Determines whether an array contains a specific element and returns true or false. ////

// console.log(TestingArray.includes(1));

//// forEach(): Executes a provided function once for each array element. ////

// TestingArray.forEach(function (number, index) {
//   console.log(`Element at index ${index}: ${number}`);
// });

//// map(): Creates a new array with the results of calling a provided function on every element in the array. ////

// TestingArray.map(function (number, index) {
//   console.log(number, index);
// });

console.log("EndingArray", TestingArray);
