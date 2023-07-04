let playerScore = 0;
let computerScore = 0;
let playerPick;
let computerPick

const picks = ["rock", "paper", "scissors"];


playRound();
playRound();
playRound();
playRound();
playRound();
winner();

function getComputerPick() {
    return picks[Math.floor(Math.random() * picks.length)];
}

function playRound(playerPick, computerPick) {
    playerPick = prompt("Rock, Paper or Scissors?");
    playerPick = playerPick.toLowerCase();
    computerPick = getComputerPick().toLowerCase();
    if (playerPick === computerPick) {
        console.log("It's a tie! No points!");
        console.log("You " + playerScore + "-" + computerScore + " Computer");
    } else if (playerPick == "rock" && computerPick == "paper") {
        console.log("Computer picked paper and gets a point!");
        computerScore++;
        console.log("The score is ");
        console.log("You " + playerScore + "-" + computerScore + " Computer");
    } else if (playerPick == "rock" && computerPick == "scissors") {
        console.log("Computer picked scissors so you win and get a point!");
        playerScore++;
        console.log("The score is ");
        console.log("You " + playerScore + "-" + computerScore + " Computer");
    } else if (playerPick == "paper" && computerPick == "rock") {
        console.log("Computer picked rock so you win and get a point!");
        playerScore++;
        console.log("The score is ");
        console.log("You " + playerScore + "-" + computerScore + " Computer");
    } else if (playerPick == "paper" && computerPick == "scissors") {
        console.log("Computer picked scissors and gets a point!");
        computerScore++;
        console.log("The score is ");
        console.log("You " + playerScore + "-" + computerScore + " Computer");
    } else if (playerPick == "scissors" && computerPick == "rock") {
        console.log("Computer picked rock and gets a point!");
        computerScore++;
        console.log("The score is ");
        console.log("You " + playerScore + "-" + computerScore + " Computer")
    } else if (playerPick == "scissors" && computerPick == "paper") {
        console.log("Computer picked paper so you win and get a point!");
        playerScore++;
        console.log("The score is ");
        console.log("You " + playerScore + "-" + computerScore + " Computer");
    }  
} 

function winner() {
    if (playerScore === computerScore) {
        console.log("It's a tie! Try again!")
    } else if (playerScore > computerScore) {
        console.log("You win! Congratulations!")
    } else {
        console.log("Computer wins! Better luck next time!")
    }
}