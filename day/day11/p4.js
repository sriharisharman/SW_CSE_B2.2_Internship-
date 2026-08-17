// callback function: a function that we pass into another function
// so that it can be called later 

function greet(name, callback){
    const message= "Hello "+ name;
    callback(message);
}

function shoowMessage(text){
    console.log(text);
    }

    greet("Rakesh", shoowMessage);

    // different types of callbacks
    // 1. Named function as callback
    function logvalue(value){
        console.log(value);
    }
    function run(value, callback){
        callback(value);
    }
    run(10, logvalue)

// 2 Anonymous function as callback
function run1(value,callback){
    callback(value);
}
run1(20,function(v){
    console.log(v);
});

// Arrow function as callback
const run2 = (value,callback) => {
    callback(value);
}

run2(30,(v) => {
    console.log(v);
});