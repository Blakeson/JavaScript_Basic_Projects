// console.time() = Starts a timer you can use to track how long an operation takes.

//start
console.time("Response time");

// alert("CLICK THE OK BUTTON");
setTimeout(() => console.log("HELLO!"), 3000);

//end
console.timeEnd("Response time");