/*  Example 1
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/

/* Example 2
let fruits  = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
});
*/

/* Example 3
let vegetables = document.getElementsByTagName('li');
vegetables[2].style.backgroundColor = "lightgreen";
*/

/* Example 4
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
*/

/* Example 5
let element = document.querySelector("#myTitle");
element.style.backgroundColor = "lightgreen";
*/

let elements = document.querySelectorAll("li");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})
