/*

As a user, I want to play Rock, Paper, Scissors against an automated opponent.

As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

As a user, I expect the computer to choose R, P, or S in return.

As a user, I want the option to play again whether I win or lose.

As a user, I want to see my total wins, ties, and losses after each round.

*/
var score = {
    win:0,
    loss:0,
    draw:0,
};

var game = prompt("Do you choose Rock (R), Paper (P) or Scissors (S)?")


var compChoice = Math.random();
if (compChoice < .25) {compChoice = "Rock"}
else if (compChoice <= .5) {compChoice = "Paper"}
else if (compChoice <= .75) {compChoice = "Scissors"}
else {compChoice = "HAND"}

var whoWon = function (userChoice , roboChoice) {

if (userChoice === roboChoice) {
    return "Tie game. Play again" 
    
}   else if (userChoice === "Rock") {
    if (roboChoice === "Scissors") {
        return "Rock breaks Scissors"
    } else if (roboChoice === "Paper") {
        return "Paper wraps Rock"
    } else {
        return "HAND CONTROLS ALL"
    }

}   else if (userChoice === "Paper") {
    if (roboChoice === "Rock") {
        return "Paper wraps Rock"
    } else if (roboChoice === "Scissors") {
        return "Scissors cut Paper"
    } else {
        return "HAND CONTROLS ALL"
    }

} else if (userChoice === "Scissors") {
    if (roboChoice === "Paper") {
        return "Scissors cut Paper"
    } else if (roboChoice === "Rock") {
        return "Rock breaks Scissors"
    } else {
        return "HAND CONTROLS ALL"
    }
}

}
console.log("You chose: " + game)
console.log("Computer chose: " + compChoice);
console.log(whoWon(game,compChoice));
window.alert(score)