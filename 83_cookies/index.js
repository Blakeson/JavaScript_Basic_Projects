// console.log(navigator.cookieEnabled);

/* Example 1
document.cookie = "firstName=Patrick; expire=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie = "lastName=Star; expire=Sun, 1 January 2000 12:00:00 UTC; path=/";

console.log(document.cookie);
*/

/*
deleteCookie("firstName");
deleteCookie("lastName");
deleteCookie("email");
*/

// console.log(document.cookie);

/*
setCookie("firstName", "Spongebob", 365);
setCookie("lastName", "Squarepants", 365);

console.log(getCookie("firstName")); 
console.log(getCookie("lastName")); 
*/

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

deleteCookie("firstName");
deleteCookie("lastName");

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookies = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    console.log(cDecoded);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}