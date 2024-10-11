// Function expression = Function without a name, avoids poullting the global scope. Write it, then forget about it

/* Example 1
const greeting = function(){
    console.log("Hello!");
}

greeting();
*/

/* Example 2
let count = 0;

function increaseCount(){
    count++;
    document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount(){
    count--;
    document.getElementById("myLabel").innerHTML = count;
}
*/

let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count++;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
    count--;
    document.getElementById("myLabel").innerHTML = count;
}