// Spread operator = Allows an iterable like an array or string to be expanded in places where zero or more arguments are pexected (unpacks the elements)

/* Example 1
let userName = "John Smith";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maximum = Math.max(...numbers);
console.log(maximum);
*/

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(...class2);

console.log(...class1);