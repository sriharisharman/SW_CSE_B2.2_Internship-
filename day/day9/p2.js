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
const arr5 = [100, 200, 300];
console.log(arr1.length);
arr5.length = 2;
console.log(arr5);
arr5.length = 5;
console.log(arr5);
console.log(arr5.length);

// Add and remove elements from an array
console.log("adding or removing elements");
const colors =["Red", "White", "Blue", "Orange"];
colors.splice(2,1)
console.log(colors);
colors.splice(1,0, "yellow",)
console.log(colors);

console.log("slice() and spread (...)");
const nums1=[10,20,30,40,50];
console.log(nums1);
const part=nums1.slice(1,4);
console.log(part);
const copy=nums1.slice(); //full shallow copy
console.log(copy);

console.log("Spread Operator");
const a = [1,2,30,45];
console.log(a);
const b = [...a,3,4]; // shallow copy
console.log(b);
const copy2=[...a];
console.log(copy2);

console.log("Looping over Arrays");
const arr8 = [111,222,333,444,555,666];
// for loop
for (let i = 0; i < arr8.length; i++) {
    console.log(i,arr8[i]);    
}

// for ... of
console.log("for ... of");
for (const value of arr8){
    console.log(value);    
}

console.log("for Each");
arr8.forEach((value, index)=>{
    console.log(index,value);
})

// Searching in arrays
console.log("Searching in arrays");
const myArray = [99,88,77,66,55,66];
console.log(myArray.indexOf(66));
console.log(myArray.lastIndexOf(66));
console.log(myArray.includes(555));


// find()
// findIndex()
const users = [
    {id:1,name:"Rakesh"},
    {id:2,name:"Bipin"}
];

const user = users.find(student=>student.id === 2);
console.log(user);
const index = users.findIndex(student=>student.name === "Bipin");
console.log(index);

// transforming array
// map
const myarray2 = [10, 20, 30, 40, 50, 60, 70];
const double = myarray2.map(n=>n*2);
console.log(double);

const greaterthan30=myarray2.filter(n=n=>30);
console.log(greaterthan30);

console.log("Reduce");
const sumofarray=myarray2.reduce((acc, curr) =>acc+curr,10);
console.log(sumofarray);