let userName = "Dude";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }
    
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }
}

