
setImmediate(function A() {
    console.log("the lone wolf dies");
});
  
setImmediate(function B() {
    console.log("but the pack survives");
});
  
process.nextTick(function C() {
    console.log("When the snows fall");
});
  
process.nextTick(function D() {
    console.log("and white winds blow");
});
  
// First event queue ends here
console.log("Show ends");


// Output: ?





























// Ans: Program ends When the snows fall and white winds blow, the lone wolf dies but the pack survives.