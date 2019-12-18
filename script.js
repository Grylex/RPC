let rpc = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;

// computerPlay randomly returns Rock Paper Scissors.
function computerPlay() { 
    return Math.floor(Math.random() * rpc.length);
}

// userPlay takes user input and returns
function userPlay() {
   let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
   
   return playerSelection;
}


// function that plays a round (playerSelection, ComputerSelection)
// returns string that declares winner
function playRound(playerSelection,computerSelection){
    computerSelection = computerPlay();
    playerSelection = userPlay();
    // console.log(computerSelection);
    console.log(`Computer chooses ${rpc[computerSelection]}`);
    console.log(`Player chooses ${playerSelection}`);
    // console.log(rpc[computerSelection]+playerSelection);
    switch(rpc[computerSelection] + playerSelection){
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            console.log('TIE!');
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            computerScore++;
            console.log('YOU LOSE!');
            break;
        default:
            playerScore++;
            console.log('YOU WIN!');
        
    }
}

function game(){
    for(i = 0; i < 5; i++){
        playRound();
        console.log(`computer:${computerScore} Player:${playerScore}`)
        console.log('----------------------------------')
    }
    if (compare(playerScore, computerScore)){
        console.log('You win out of five!')
    }else{
        console.log('the computer wins out of five!')
    }
    playerScore = 0;
    computerScore= 0;
} 


let compare = (playerScore, computerScore) => (playerScore >= computerScore)? true:false;

console.log('ok, best of five')

game()
