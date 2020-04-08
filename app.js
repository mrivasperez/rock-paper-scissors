const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK',
PAPER = 'PAPER',
SCISSORS = 'SCISSORS';

// Let user choose whether they want r p or s

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`, '');
    if(selection !== ROCK || PAPER || SCISSORS){
        alert('Invalid choice! I have chosen Rock for you.')
    }
}

startGameBtn.addEventListener('click', function(){
    console.log('Game is starting...')
});