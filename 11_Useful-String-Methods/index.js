let userName = "John Smith";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("h"));
console.log(userName.lastIndexOf("h"));
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);