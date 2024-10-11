// error = Object with a description of something went wrong

// throw = executes a user-defined error

// finally = always executes

/* Example 1
try {
    console.lag();
}
catch(error){
    console.log(error);
}
*/

try {
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!";

    console.log(`${x} is a number`);
} 
catch(error) {
    console.log(error);
}
finally {
    console.log("This always executes");
}