let playerScore = 0;
let computerScore = 0;
let playerPick;
let computerPick;

const picks = ["rock", "paper", "scissors"];

const container = document.querySelector('#container');

const score = document.createElement('div');
score.textContent = 'Player: ' + playerScore + 
' - ' + 'Computer: ' + computerScore;
container.appendChild(score);

const message = document.createElement('div');
message.textContent = 'Pick rock, paper or scissors';
container.appendChild(message);

const rock = document.createElement("button");
rock.textContent = 'Rock';
rock.addEventListener('click', () => {
    playRound(playerPick = 'rock')
});
container.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = 'Paper';
paper.addEventListener('click', () => {
    playRound(playerPick = 'paper');
});
container.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = 'Scissors';
scissors.addEventListener('click', () => {
    playRound(playerPick = 'scissors');
});
container.appendChild(scissors);

function getComputerPick() {
    return picks[Math.floor(Math.random() * picks.length)];
}

function playRound(playerPick, computerPick) {
    computerPick = getComputerPick().toLowerCase();
    if (playerPick === computerPick) {
        message.textContent = "It's a tie! No points!";
        score.textContent = 'Player: ' + playerScore + 
        ' - ' + 'Computer: ' + computerScore;        
    } else if (playerPick == "rock" && computerPick == "paper") {
        message.textContent = "Computer picked paper and gets a point!";
        computerScore++;
        score.textContent = 'Player: ' + playerScore + 
        ' - ' + 'Computer: ' + computerScore;
    } else if (playerPick == "rock" && computerPick == "scissors") {
        message.textContent = "Computer picked scissors so you win and get a point!";
        playerScore++;
        score.textContent = 'Player: ' + playerScore + 
        ' - ' + 'Computer: ' + computerScore;
    } else if (playerPick == "paper" && computerPick == "rock") {
        message.textContent = "Computer picked rock so you win and get a point!";
        playerScore++;
        score.textContent = 'Player: ' + playerScore + 
        ' - ' + 'Computer: ' + computerScore;
    } else if (playerPick == "paper" && computerPick == "scissors") {
        message.textContent = "Computer picked scissors and gets a point!";
        computerScore++;
        score.textContent = 'Player: ' + playerScore + 
        ' - ' + 'Computer: ' + computerScore;
    } else if (playerPick == "scissors" && computerPick == "rock") {
        message.textContent = "Computer picked rock and gets a point!";
        computerScore++;
        score.textContent = 'Player: ' + playerScore + 
        ' - ' + 'Computer: ' + computerScore;
    } else if (playerPick == "scissors" && computerPick == "paper") {
        message.textContent = "Computer picked paper so you win and get a point!";
        playerScore++;
        score.textContent = 'Player: ' + playerScore + 
        ' - ' + 'Computer: ' + computerScore;
    }  
    
    if (playerScore === 5 || computerScore === 5) {
        winner()
    } 
} 

function winner() {
    if (playerScore === computerScore) {
        message.textContent = "It's a tie! Try again!";
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore > computerScore) {
        message.textContent = "You win! Congratulations!";
        playerScore = 0;
        computerScore = 0;
    } else {
        message.textContent = "Computer wins! Better luck next time!";
        playerScore = 0;
        computerScore = 0;
    }
}