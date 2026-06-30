const choices = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return "tie";
  } else if (
    (playerChoice === 'Rock'    && computerChoice === 'Scissor') ||
    (playerChoice === 'Scissor' && computerChoice === 'Paper') ||
    (playerChoice === 'Paper'   && computerChoice === 'Rock')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const totalRound = 5;

document.getElementById('start').addEventListener('click', () => {
  document.getElementById('setup').hidden = true;
  document.getElementById('game-screen').hidden = false;
});

function play(playerChoice) {
  if (roundCount < totalRound) {
    roundCount++;
    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, playerChoice);

    if (result == 'tie') {
      document.getElementById('result').textContent = "This round is tie!";
    } else if (result == 'win') {
      playerScore++;
      document.getElementById('result').textContent = "You win!";
    } else {
      computerScore++;
      document.getElementById('result').textContent = "You lose!";
    };
    document.getElementById('round-count').textContent = 'Round: ' + roundCount;
    document.getElementById('round-result').hidden = false;
  } else {
    showFinalResult();
  }
};

function showFinalResult() {
  document.getElementById("round-result").hidden = true;

  if (playerScore > computerScore) {
    document.getElementById("final-msg").textContent = "You are the Final Winner!";
  } else if (playerScore < computerScore) {
    document.getElementById("final-msg").textContent = "Computer wins this game!";
  } else {
    document.getElementById("final-msg").textContent = "It's a draw.";
  }

  document.getElementById("player-score").textContent = `Your Score: ${playerScore}`;
  document.getElementById("computer-score").textContent = `Computer Score: ${computerScore}`;

  document.getElementById("final-result").hidden = false;
};