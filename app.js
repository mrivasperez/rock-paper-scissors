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
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`, '').toUpperCase();
    if(selection !== ROCK || PAPER || SCISSORS){
        alert(`Invalid choice! I have chosen ${DEFAULT} for you.`)
        return DEFAULT;
    }
    return selection;
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
}

startGameBtn.addEventListener('click', function(){
    if(gameRunning) {
        return;
    }
    gameRunning = true;
    console.log('Game is starting...')
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    const computerChoice = generateComputerChoice();
});