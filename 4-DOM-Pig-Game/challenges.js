/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores
let roundScore
let activePlayer
let gamePlaying
let lastDice

const newGame = function () {
  scores = [0, 0]
  roundScore = 0
  activePlayer = 0
  gamePlaying = true
// hides dice
  document.querySelector('.dice').style.display = 'none'
// sets all values to zero
  document.getElementById('score-0').textContent = 0
  document.getElementById('score-1').textContent = 0
  document.getElementById('current-0').textContent = 0
  document.getElementById('current-1').textContent = 0
// sets all names back to default names like 'Player 1' instead of winner
  document.querySelector('#name-0').textContent = 'Player 1'
  document.querySelector('#name-1').textContent = 'Player 2'

  document.querySelector('.player-0-panel').classList.remove('winner')
  document.querySelector('.player-1-panel').classList.remove('winner')

  document.querySelector('.player-0-panel').classList.remove('active')
  document.querySelector('.player-1-panel').classList.remove('active')
  document.querySelector('.player-0-panel').classList.add('active')


}

newGame()

// document.querySelector('#current-' + activePlayer).textContent = dice
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'




// const c = document.querySelector('#score-0').textContent
// console.log(c)

const nextPlayer = function () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  roundScore = 0

  document.getElementById('current-0').textContent = 0
  document.getElementById('current-1').textContent = 0

  // document.querySelector('.player-0-panel').classList.remove('active')
  // document.querySelector('.player-1-panel').classList.add('active')
  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
  document.querySelector('.dice').style.display = 'none'

}

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    // 1. random number
      const dice = Math.floor(Math.random() * 6) + 1
      // 2. Display the result
      const diceDOM = document.querySelector('.dice')
      diceDOM.style.display = 'block'
      diceDOM.src = 'dice-' + dice + '.png'

    // 3. Update the round score IF the rolled number was NOT One
    if (dice === 6 && lastDice === 6) {
      //player loses score
      scores [activePlayer] = 0
      document.querySelector('#score-' + activePlayer).textContent = 0
      nextPlayer()
    } else if (dice > 1) {
      // add score
      roundScore += dice
      document.querySelector('#current-' + activePlayer).textContent = roundScore
    } else {
      // next player
      nextPlayer()
    }
    lastDice = dice

  }

})

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    let input = document.querySelector('.final-score').value
    let winningScore

    // Undefined, 0 or null or '' are coerced to false anything esle is coerced to true
    if (input) {
      winningScore = input
    } else {
      winningScore = 100
    }

    // Check if player won the game

    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
      document.querySelector('.dice').style.display = 'none'
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
      gamePlaying = false
    } else {
      // next player
      nextPlayer()
    }
  }

})

document.querySelector('.btn-new').addEventListener('click', newGame)

/* Code challenges
1. A player loses his entire score when he rolls twp 6 in a row. After that, it's
the next player's turn.
2. Add an input field to the HTML where players can set the winning score, so that
they can change the predefined score of 100
3. Add another dice to the game, so that there are two different dices now. THe
Player will lose his current score when one of them is a 1.
*/