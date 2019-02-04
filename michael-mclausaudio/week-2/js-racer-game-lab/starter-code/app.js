console.log('hello')

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
//the amount of left margin needed to win
let winCondition = 90;
//players left margin
let marginLeft = 0;
//amount of distance opponent has moved
let opponentDistance = 0;
// increase difficulty to give the opponent a chance to move further
let difficulty = 5;
//amount of margin added each click -- determined in play func
let movement;
//uindefined var to be assigned to setInterval
let timer;

//scoreboard
let player1Score = document.getElementById('player1Score');
let player2Score = document.getElementById('player2Score');


//controls
document.body.addEventListener('keydown', function() {
  //if we are passed the needed margin, run the win checker on our character
  if (marginLeft >= winCondition) {
    winChecker([player1])
  } else {
    //otherwise keep going
    marginLeft+= movement;
    player1.style.paddingLeft = `${marginLeft}%`
    console.log('click')
  }
});

//game modes
function play() {
  movement = 2;
  timer = setInterval(race, 200);
}
function stop(){
  movement = 0;
  clearInterval(timer);
}
//game mechanics
function race(){
  opponentDistance += Math.floor(Math.random() * difficulty);
  // if statement to make sure the random increment doesn't go about the win condition
  if (opponentDistance >= winCondition) {
    opponentDistance = winCondition;
  }
  player2.style.paddingLeft = `${opponentDistance}%`
  // console.log(player2.style.padding)
  winChecker([player1, player2])
}

function winChecker(arrayOfPlayers){
  for(let i = 0; i < arrayOfPlayers.length; i++){
    if(arrayOfPlayers[i].style.paddingLeft == `${winCondition}%`){
      let winner;
      if(arrayOfPlayers[i].id === 'player2'){
        winner = 'Spilt Cup Of Coffee';
      } else {
        winner = 'Thousands of years of technological advancement & human ingenuity?';
      }
      document.getElementById('score').innerHTML = `<h1>${winner} wins!</h1>`;
      stop();
    }
  }
}

//start the game
play();

