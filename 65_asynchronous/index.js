// Synchronous = In an ordered sequence. Step-by-step linear instructions.
// Asynchronous = Out of sequence Ex: Access a databse, etch a file, tasks that take time

console.log("START");
setTimeout(() => console.log("This step is asynchronous"), 5000);
console.log("END");