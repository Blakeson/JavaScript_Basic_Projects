// Promise = Object that encapsulates the result of an asynchronous operation. Lets asynchronous methods return values like synchronous methods
// The STATE is 'pending' then: 'fulfilled' or 'rejected'

/* Example 1
const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");
    } else {
        reject("File NOT loaded");
    }

});

promise.then(value => console.log(value)).catch(error => console.log(error));
*/

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));