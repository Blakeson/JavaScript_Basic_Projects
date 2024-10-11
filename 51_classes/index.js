// Class = A blueprint for creating objects. Defines what properties and methods they have. Use a contrsuctor for unique properties.

class Player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }

    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();

player2.exit();