// slice() = Estracts a section of a string and returns it as a new string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

// firstName = fullName.slice(0, 4);
// lastName = fullName.slice(5);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);