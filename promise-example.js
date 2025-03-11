const newPromise = new Promise((resolve, reject) => {
    console.log("Started running promise");
    const newCondition = true;
    
    if(newCondition) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
});

// old syntax
// "then" function only invokes once the promise has resolved
// catch will invoke if the promise rejects instead
newPromise
    .then((result) => console.log(result))
    .then(() => console.log("done"))
    .catch((error) => console.log(error));

// newer syntax
// async functions can use the "await" keyword
// code in an async function will stop when awaiting a promise resolution
async function asyncCall(promiseArg) {
    console.log("Started async function");
    // await will wait for a returned promise to invoke its "resolve" function
    // and use whatever value is given to resolve as its return
    const result = await promiseArg;
    console.log(result);
    console.log("done");
}

asyncCall(newPromise);