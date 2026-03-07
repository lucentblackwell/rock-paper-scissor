function getComputerChoice() {
  let rock, paper, scissor;

  rock = Math.random();
  paper = Math.random();
  scissor = Math.random();

  variableWithLargestNumber = Math.max(rock, paper, scissor);

  if (rock === variableWithLargestNumber) {
    return "rock";
  } else if (paper === variableWithLargestNumber) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  let humanChoice;

  humanChoice = prompt("Rock-Paper-Scissor \nWhat do you choose? (rock, paper, or scissor) \nType the full name of your choice. (e.g. type 'rock', not 'r' or anything else.) ");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (computerChoice === humanChoice) {
    return "It's a tie."
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "scissor" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissor") ||
    (computerChoice === "scissor" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
    return `You won!! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
  } else {
    return "Enter a valid input as instructed.";
  }

}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    let roundResult = playRound(computerChoice, humanChoice);
    alert(roundResult);
  }

  if (computerScore > humanScore) {
    return `Sorry, but your computer wins this game. \nComputer's Score: ${computerScore} \nYour Score: ${humanScore}`;
  } else if (computerScore === humanScore) {
    return `The game is a draw.\nComputer's Score: ${computerScore} \nYour Score: ${humanScore}`
  } else {
    return `Congrats! You won the game. \nComputer's Score: ${computerScore} \nYour Score: ${humanScore}`;
  }
}

aGame = playGame();
alert(aGame);
console.log(aGame);