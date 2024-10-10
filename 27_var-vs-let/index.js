// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

/* Example 1
let name = "Dude";

doSomething();

function doSomething(){
    for(var i = 1; i <= 3; i++) {
        console.log(i);
    }
}

console.log(i);
*/

// If global, var will change browser's window properties

let name = "Dude";