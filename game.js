const buttons = document.querySelectorAll('.btn');
let comment = document.getElementById('comment');
let human = document.getElementById('human-score');
let computer = document.getElementById('computer-score');


let humanScore = 0 ;
let computerScore = 0;


// addEventListener to button

buttons.forEach(button => button.addEventListener('click', playGame));


// add function playGame
function playGame(e) {
  const playerChoice = e.target.id;
  const computerChoice = computerPlay();
  gameRound(playerChoice,computerChoice);
  winner();
}

// add function computerPlay
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

// add function gameRound
function gameRound (playerChoice,computerChoice) {
  
  let player = playerChoice;

if (player === "rock" && computerChoice === "paper" ) { 
      comment.textContent = `Computer won :  ${computerChoice} beats ${player}`;
      computerScore += 1;
      computer.textContent = `Computer :  ${computerScore}`;
      human.textContent = `You : ${humanScore}`;


} else if (player === "paper" && computerChoice === "scissor") {
      comment.textContent = `Computer won :  ${computerChoice} beats ${player}`;
      computerScore += 1;
      computer.textContent = `Computer :  ${computerScore}`;
      human.textContent = `You : ${humanScore}`;
     

}
  else if (player === "scissor" && computerChoice === "rock") {
       comment.textContent = `Computer won :  ${computerChoice} beats ${player}`;
       computerScore += 1;
       computer.textContent = `Computer :  ${computerScore}`;
       human.textContent = `You : ${humanScore}`;
       
}
  else if (player === "paper" && computerChoice === "rock" ) {
       comment.textContent = `You won : ${player} beats ${computerChoice}`;
       humanScore += 1;
       human.textContent = `You : ${humanScore}`;
       computer.textContent = `Computer :  ${computerScore}`;
      
  }

  else if (player === "scissor" && computerChoice === "paper" ) {
      comment.textContent = `You won : ${player} beats ${computerChoice}`;
       humanScore += 1;
       human.textContent = `You : ${humanScore}`;
       computer.textContent = `Computer :  ${computerScore}`;
       
  }

  else if (player === "rock" && computerChoice === "scissor" ) {
      comment.textContent = `You won : ${player} beats ${computerChoice}`;
      humanScore += 1;
      human.textContent = `You : ${humanScore}`;
      computer.textContent = `Computer :  ${computerScore}`;
  }
  else {
      comment.textContent = `The match is tie, Try again`;
      human.textContent = `You : ${humanScore}`;
      computer.textContent = `Computer :  ${computerScore}`;
    
  }
}

// add function winner 
function winner() {
     if (humanScore === 5 && computerScore < 5) {
        comment.textContent = `You Won the Game !! ,  Congrats`;
        comment.style.color = "#906387";
        comment.style.fontWeight = "bold";
        comment.style.fontSize = "60px";
        humanScore = 0;
        computerScore = 0;
        window.setTimeout(function(){location.reload()},1500);
        
       
        
}    else if (humanScore < 5 && computerScore === 5) {
         comment.textContent = `Computer Won the Game !! , You Lose`;
         comment.style.color = "#906387";
         comment.style.fontWeight = "bold";
         comment.style.fontSize = "60px";
         humanScore = 0;
         computerScore = 0; 
         window.setTimeout(function(){location.reload()},1500);
}
}


