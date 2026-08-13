// Arrays

// creating array
// array literal
const numbers = [1,2,3,4]
const mixed  = [1, "Hello", null]

console.log(numbers);
console.log(mixed);
// Using Array constructor:
const arr1 = new Array(1,2,3);
const arr2 = new Array(5);
console.log(arr1);
console.log(arr2);


// Empty array
const newArray = [];
// accessing the values within the array
const vegetables = ["tomato", "potato", "brinjal", "cucumber"];
console.log(vegetables[0]);
console.log(vegetables[1]);
console.log(vegetables[2]);
console.log(vegetables[3]);
// console.log(vegetables[4]); error
console.log(vegetables[-1]);

// updating array elements
const nums = [10,20,30,40,50];
nums[1] = 25;
console.log(nums);

const arr = [10, 100, 1000, 1100]
arr[2]= 11;
console.log(arr);

// array length
console.log("Array length")
const arr1 = [100, 200, 300];
console.log(arr1.length);
arr1.length = 2;
console.log(arr1);
arr1.length = 5;
console.log(arr1);
console.log(arr1.length);

// Add and remove elements from an array
console.log("adding or removing elements");
const colors =["Red", "White", "Blue", "Orange"];
colors.splice(2,1)
console.log(colors);
colors.splice(1,0, "yellow",)
console.log(colors);