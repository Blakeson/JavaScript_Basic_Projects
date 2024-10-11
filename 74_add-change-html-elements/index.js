// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure method)

/* Example 1
const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Enter your name");
document.body.append(nameTag);
*/

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "Mango";
// myList.append(listItem);
// myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[3]);