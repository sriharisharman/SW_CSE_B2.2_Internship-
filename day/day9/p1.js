// Function declaration without return values
function greet(name){
    console.log("Hello, "+ name);
}
greet("Sri Hari");

// Function with retuen values a, b are parameters whereas 8  and 9 are arguments
function multiply(a, b){
    let result = a * b;
    console.log(result)
    return result;
    
}
multiply(6,6);
// function expressiom
function add (a, b){
    return a + b;
}
const S = console.log(add(2,3));

// Arrow function
 const sum2 = (a, b) => a+b;
 console.log(sum2(10,20));


//  Default parameter
function greetings( name = "Guest"){
    return "Hello " + name;
}
console.log(greetings());
console.log(greetings("Hari"));

// Rest parameter: undefined number of parameters
function sum(... numbers){
    let total = 0;
    for(let n of numbers){
        total +=n;
    }
    return total;
}
console.log(sum(1,2,3,4));
console.log(sum(10,20));

// Immediately invoke function expression (IIFE)
(function(){
    console.log("This runs once");
})();

// Function Hoisting
console.log(add2(2,3));
function add2(a,b){
    return a+b;
}

// error
// console.log(sub(5,2));
// const sub = fun(a,b){
//     return a - b;
// }

/// Higher order function
function runTwice(fn) {
  fn();
  fn();
}
runTwice(function() {
  console.log("Hello");
});

// call back function
function fetchdata(callback){
    let data = "some data";
    callback(data);
}
fetchdata(function(data){
    console.log("Received: ", data);
});

// Functions returning functions
function createMultiplier(n) {
  return function(x) {
    return x * n;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10

// `this` in functions
const person = {
  name: "Asha",
  greet() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Asha

// Recursion
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120