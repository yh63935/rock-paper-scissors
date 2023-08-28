//declare variables
let playerScore = 0
let computerScore = 0

//randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    const choices = ['Rock', 'Paper' , 'Scissors']
    //get random index from array
    let randomIndex = (Math.floor(Math.random() * 3))
    let randomTurn = choices[randomIndex]
    return randomTurn
}

//plays a round of rock, paper, scissors and determines who wins
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        console.log("It's a draw!")
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissors')
            || (playerSelection === 'paper' && computerSelection === 'rock')
            || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        console.log('You win!')
    }
    else if (playerSelection !== 'rock' && playerSelection !== 'scissors'
            && (playerSelection !== 'paper')) {
        console.log('Enter a valid value of rock, paper, or scissors')
    }
    else {
        computerScore++;
        console.log('You lose :(')
    }
}


//runs a game consisting of 5 rounds
function game() {
    for (let i =0; i<5; i++) {
        playRound(prompt('Choose your weapon'), getComputerChoice())
    }
    if (playerScore>computerScore) {
        console.log('You win!')
    }
    else if (playerScore===computerScore) {
        console.log('A draw! Play again?')
    }
    else {
        console.log('You lose :(')
    }
}
game()
console.log(playerScore)
console.log(computerScore)

