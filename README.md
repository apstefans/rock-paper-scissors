# rock-paper-scissors
Rock Paper Scissor project at "The Odin Project"

Pseudocode

Variables needed:
    - Player Score (points)
    - Computer Score (points)
    - Player pick
    - Computer pick (randomly generated)

Functions needed
    - Computer choice
    - Player choice (case in-sensitive)

Game works:

Player is greeted and prompted to make a selection of:
    - Rock
    - Paper
    - Scissor

Once player makes a selection the computer makes a random selection of the same items.

Condtition

If Player picks rock and Computer picks:
Rock = Tie and no points to either
Paper = Computer wins and gets 1 point
Scissors = Player wins and gets 1 point

If player picks Paper and Computer picks:
Rock = Player wins and gets 1 point
Paper = Tie and no points to either
Scissors = Computer wins and gets 1 points

If player picks scissors and Computer picks:
Rock = Computer wins and gets 1 point
Paper = Player wins and gets 1 point
Scissors = Tie and no points to either


The game is 5 rounds. The Player or Computer with most points at the end is declared the winner and Player is asked if they would like to play again.

