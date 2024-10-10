/* ternary operator = Shortcut for an if/else statement. Takes 3 operands.

1. A condition with ?
2. expression if True :
3. expression if False

condition ? exprIfTrue : exprIfFalse
*/


/* Example 1
let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
    return age >= 18 ? true : false;
}
*/

checkWinner(true);

function checkWinner(win) {
    win ? console.log("You Win!") : console.log("You Lose!");
}