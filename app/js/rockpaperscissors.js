////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
   if (playerMove === 'rock' && computerMove === "scissors") {
       winner = 'player';
   } else if (playerMove === 'scissors' && computerMove === 'paper') {
       winner = 'player';
   } else if (playerMove === 'paper' && computerMove === 'rock') {
       winner = 'player';
   } else if (playerMove === computerMove) {
       winner = 'tie';
   } else {
       winner = 'computer';
   }
   return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;

while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    winner = getWinner(playerMove,computerMove);
    console.log ('Player selected ' + playerMove + ' Computer selected ' + computerMove);
    
    if (winner === 'player') {
        console.log('You won this round');
        playerWins += 1;
    } 
    else if (winner === 'computer') {
        console.log('Computer won this round');
        computerWins += 1;
    } 
    else {
        console.log('This round is a tie');
    }  
}
    console.log ('The current score is ' + playerWins + ' to ' + computerWins + '\n');

return [playerWins, computerWins];
}
playToFive();


