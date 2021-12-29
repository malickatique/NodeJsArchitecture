
console.log("In the beginning...");


setTimeout(function () {
    
    // What type of contents of this will have
    console.log(this);
    
}, 2000);   


console.log("There was nothing...");