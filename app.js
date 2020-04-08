const startGameBtn = document.getElementById('start-game-btn');

// User choices
const ROCK = 'ROCK',
PAPER = 'PAPER',
SCISSORS = 'SCISSORS',
DEFAULT = 'ROCK',
DRAW = 'DRAW',
PWINNER = 'PLAYER WINS',
CWINNER = 'COMPUTER WINS';

let gameRunning = false;

// Let user choose whether they want r p or s

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`).toUpperCase();
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
        ){
        alert(`Invalid choice! I have chosen ${DEFAULT} for you.`)
        return DEFAULT;
    } else {
        return selection;
    }
}

// Computer choice
const generateComputerChoice = function() {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if(randomValue < .67){
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const judge = function (cChoice, pChoice) {
    if(cChoice === pChoice) {
        return DRAW
    }
     else if(
         (cChoice === ROCK && pChoice === SCISSORS)||
         (cChoice === SCISSORS && pChoice === PAPER)||
         (cChoice === PAPER && pChoice === ROCK)
        ) {
            return CWINNER
    } else {
        return PWINNER
    };
};
startGameBtn.addEventListener('click', function(){
    if(gameRunning) {
        return;
    }
    gameRunning = true;
    console.log('Game is starting...')
    const playerChoice = getPlayerChoice();
    console.log(`Player chose ... ${playerChoice}`);
    const computerChoice = generateComputerChoice();
    console.log(`Computer chose ... ${computerChoice}`);
    const winner = judge(computerChoice, playerChoice)
    console.log(winner);
    gameRunning = false;
    console.log('Press the button to play again.')
});