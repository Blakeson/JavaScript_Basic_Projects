let age = 21;
let firstName = "John";
let student = true;

age = age + 1;

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age;
document.getElementById("p3").innerHTML = "Enrolled:  " + student;