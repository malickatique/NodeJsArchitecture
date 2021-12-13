// // Async 
// console.log("In the beginning...");


// setTimeout(function () {
//     // console.log(this._idleTimeout);
//     console.log(this._onTimeout());
// }, 2000);


// console.log("There was nothing...");


// Callback Vs Promises

// 1. Callback
const doWorkuseCallback = (callback) => {
    setTimeout(() => {
        callback("Good", "Response");
    }, 2000);
}

doWorkuseCallback( (err, res) => {
    console.log( err, res );
});

// Output: Good Response


// 2. Promises
const doWorkPromise = new Promise( (resolve, reject) => {
    setTimeout(()=> {
        // resolve("Happy data!" );
        // OR, not both
        reject("This database sucks!");
    }, 2000)
});

doWorkPromise
.then((res) => {
    console.log("Success", res);
})
.catch((err) => {
    console.log( "Error", err );
});

// Output: This database sucks!