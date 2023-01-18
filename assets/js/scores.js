var highscores = document.querySelector("#highscores");

function saveHighScores () {
    var playerInitials = localStorage.getItem("initials");
    var playerScore = localStorage.getItem("score");
  
    var playerInitialsElement = document.createElement('li');
    var playerScoreElement = document.createElement('li');
    
  console.log(playerInitialsElement) 
  console.log(playerScoreElement) 
  
    playerInitialsElement.textContent = playerInitials;
    playerScoreElement.textContent = playerScore;
  
    highscores.appendChild(playerInitialsElement)
    highscores.appendChild(playerScoreElement)
  }