/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice;  // declare variables all at once to keep the code clean

scores = [0, 0];    // each players score
roundScore = 0;     // each score per turn/round
activePlayer = 1;   // who is the active player -- player1 = 0 / player2 = 1

dice = Math.floor(Math.random() * 6) + 1;   // Math.floor() rounds to a whole number -- Math.random() creates a random number

document.querySelector('#current-' + activePlayer).textContent = dice;      // value setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

let x = document.querySelector('#score-0').textContent;     // value getter
console.log(x);

document.querySelector('.dice').style.display = 'none';












