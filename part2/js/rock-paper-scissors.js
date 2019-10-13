
var r = "rock";
var p = "paper";
var s = "scissors";

function getcpuChoice() {
  var cpuchoice = Math.round(Math.random()*100)%3;
  switch (cpuchoice) {
    case 0:
      cpuchoice = r;
      break;
    case 1:
      cpuchoice = p;
      break;
    case 2:
      cpuchoice = s;
      break;
    default:r
      break;
  }
  return cpuchoice
}

function playGame() {
  var playerchoice;
  var isValid = false;
  while(!isValid) {
    var arg = window.prompt("Please select rock, paper, or scissors");
    switch (arg) {
      case r:
      case p:
      case s:
        playerchoice = arg;
        isValid = true;
        break;
      default:
        break;
    }
  }
  evaluate(playerchoice, getcpuChoice());
}

function evaluate(playerchoice, cpuchoice) {
  if (playerchoice == r) {
    if (cpuchoice == s) {
      win(playerchoice, cpuchoice);
    } else if (cpuchoice == p) {
      lose(playerchoice, cpuchoice);
    } else {
      tie(playerchoice, cpuchoice)
    }
  } else if (playerchoice == p) {
    if (cpuchoice == r) {
      win(playerchoice, cpuchoice)
    } else if (cpuchoice == s) {
      lose(playerchoice, cpuchoice)
    } else {
      tie(playerchoice, cpuchoice)
    }
  } else {
    if (cpuchoice == p) {
      win(playerchoice, cpuchoice);
    } else if (cpuchoice == r) {
      lose(playerchoice, cpuchoice);
    } else {
      tie(playerchoice, cpuchoice)
    }
  }
}

function win(playerchoice, cpuchoice) {
  alert("You win! Your choice is "+playerchoice+", computer choice is " +cpuchoice);
}

function lose(playerchoice, cpuchoice) {
  alert("You lose! Your choice is "+playerchoice+", computer choice is " +cpuchoice);
}

function tie(playerchoice, cpuchoice) {
  alert("You tied! Your choice is "+playerchoice+", computer choice is " +cpuchoice);
}

while(window.confirm("Play?")) {
  playGame()
}
