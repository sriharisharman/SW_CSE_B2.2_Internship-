// promise is an object that represnts a future value 
// it stands for a result that is not available 
// but will be available later 

// Movie on Day 1 FDFS Theatre in ticket issue centre 
//  two tickets of that movie and u say 400 is
//  usual price but u will pay 500
// promise by RBI for that piece of paper 

// when is promise is created: one of these three stATES 
// 1. pending: not fulfilled yet
// 2. fulfilled: completed successfully with a value  
// 3. rejected failed with an error
//  basic promise creation

const success=true;
const promise=new Promise(function(resolve,reject){
    // some functionality
    if (success) {
        resolve("Data loaded");
        console.log("Promise Resolved");
    }
    else{
        console.log("Failed Promise");
        reject(new Error("Failed to load"));
        
    }
})


// promise chaining
fetchData()
.then(function(data){
    return process(data);
})
.then(function(processed){
    console.log("Final Result",processed);
})
//error condition
.catch(function(err){
    console.log("Error:" ,err);
})