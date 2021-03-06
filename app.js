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

const getPlayerChoice = () => {
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
const generateComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34) {
        return ROCK;
    } else if(randomValue < .67){
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const judge = (cChoice, pChoice) => {
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

/* 

Above code can also be written as follows:

const judge = (cChoice, pChoise) => {
    return cChoice === pChoise
    ? RESULT_DRAW
    :   (cChoice === ROCK && pChoice === SCISSORS)||
        (cChoice === SCISSORS && pChoice === PAPER)||
        (cChoice === PAPER && pChoice === ROCK)
    ? PWINNER
    : CWINNER
}

*/

startGameBtn.addEventListener('click', () => {
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
    alert(`PLAYER CHOSE ${playerChoice}
    \n COMPUTER CHOSE ${computerChoice}
    \n ${winner}
    \n IF YOU'D LIKE TO PLAY AGAIN, PLEASE CLICK THE 'START GAME' BUTTON.
    `)
});

// not part of game

// REST PARAMETER
const sum = (...numbers) => {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return sum;
}