// JS Variables
// var | let | const
// 1. var
var x = 5;
var x = 20;
var x = 20;
console.log(x)
// scope behaviour: Var is not block scoped
if(true){
    var message="Hi";
}
console .log(message);
// 2. let
// let name = "Hari";
// console.log(Name) not allowed to redeclare with the same name
let name = "Sri Hari Sharma.N";
name ="Hari" // can be reassigned 
console.log(name)
// scope behaviour: block scope
if (true){
    let mes ="Hi";
}
// console.log(mes); 
// 3. const

// g = 10 cannot be reassigned
// const g = 10 not allowed to redeclare eith the same name
const g = 10;
console.log(g)
// scope behaviour: block scope
// if (true){
//     const g = 9.8 will not run
// }
// console.log(g);