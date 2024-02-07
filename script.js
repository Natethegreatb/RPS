// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________
function displayChoice(choice, image) {
  document.getElementById(choice).src = image;
}
function getCompChoice(choice) {
  choice = Math.round(Math.random() * 3);
  if (choice == 1) {
    displayChoice("computer-choice", "images/rock.png");
    return "rock";
  } else if (choice == 2) {
    displayChoice("computer-choice", "images/paper.png");
    return "paper";
  } else {
    displayChoice("computer-choice", "images/scissors.png");
    return "scissors";
  }
}
function getResult(player, comp) {
  if (
    (player == "rock" && comp == "scissors") ||
    (player == "scissors" && comp == "paper") ||
    (player == "paper" && comp == "rock")
  ) {
    return "player";
  } else if (
    (comp == "rock" && player == "scissors") ||
    (comp == "scissors" && player == "paper") ||
    (comp == "paper" && player == "rock")
  ) {
    return "comp";
  } else {
    return "tie";
  }
}
function showResult(result) {
  if (result == "player") {
    document.getElementById("btn-container").innerHTML = "PLAYER WINS";
    setTimeout(showChoices, 2000);
  } else if (result == "comp") {
    document.getElementById("btn-container").innerHTML = "COMPUTER WINS";
    setTimeout(showChoices, 2000);
  } else {
    document.getElementById("btn-container").innerHTML =
      "IT'S A TIE, NOBODY WINS";
    setTimeout(showChoices, 2000);
  }
}
function updateScore(score) {
  if (score == "player") {
    document.getElementById("pScore-container").innerHTML = pScore += 1;
  } else if (score == "comp") {
    document.getElementById("cScore-container").innerHTML = cScore += 1;
  }
}
