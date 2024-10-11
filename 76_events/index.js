/* Example 1
const element = document.getElementById("myButton");
element.onclick = doSomething;
*/

/* Example 2
const element = document.body;
element.onload = doSomething;
*/

/* Example 3
const element = document.getElementById("myText");
element.onchange = doSomething;
*/

/* Example 4
const element = document.getElementById("myDiv");
element.onmouseover = doSomething;
element.onmouseout = doSomethingElse;
*/

const element = document.getElementById("myDiv");
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    // alert("You did something");
    element.style.backgroundColor = "red";
}

function doSomethingElse() {
    element.style.backgroundColor = "lightgreen";
}