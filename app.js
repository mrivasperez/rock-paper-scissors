const startGameBtn = document.getElementById('start-game-btn');

// User choices
const ROCK = 'ROCK',
PAPER = 'PAPER',
SCISSORS = 'SCISSORS',
DEFAULT = 'ROCK';

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

startGameBtn.addEventListener('click', function(){
    if(gameRunning) {
        return;
    }
    gameRunning = true;
    console.log('Game is starting...')
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});