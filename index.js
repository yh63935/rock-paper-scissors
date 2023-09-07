
let playerScore = 0
let computerScore = 0
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const playerSelectionBtns = document.querySelectorAll("button");
const resultsEl = document.querySelector(".results");
const playerScoreEl = document.querySelector(".playerScore")
const computerScoreEl = document.querySelector(".computerScore")


// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’ for computer's turn
function getComputerChoice() {
    const choices = ['Rock', 'Paper' , 'Scissors']
    // Get random index from array
    let randomIndex = (Math.floor(Math.random() * 3))
    // Get random choice from array
    let randomTurn = choices[randomIndex]
    return randomTurn
}

// Plays a round of rock, paper, scissors and determines who wins
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        console.log("It's a draw for this round!")
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissors')
            || (playerSelection === 'paper' && computerSelection === 'rock')
            || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        console.log('You win the round!')
    }
    else if (playerSelection !== 'rock' && playerSelection !== 'scissors'
            && (playerSelection !== 'paper')) {
        console.log('Enter a valid value of rock, paper, or scissors')
    }
    else {
        computerScore++;
        console.log('You lose this round:(')
    }
}

// Play a game of rock, paper, scissors that ends when player or computer reaches 5 points
function game() {        
            playerSelectionBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    if (playerScore < 5 && computerScore < 5) {
                        playRound(btn.className, getComputerChoice())
                    }
                    else {
                        resetGame();
                        displayResults();         
                    }
                    
                    playerScoreEl.innerText = "Player score: " + playerScore;
                    computerScoreEl.innerText = "Grim Reaper score: " + computerScore;
                    
                })
            })
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

function displayResults() {
    if (playerScore > computerScore) {
        resultsEl.innerText = "You win the game. You are transported back like nothing ever happened.";

    }
    else if (playerScore === computerScore) {
        resultsEl.innerText = 'We tied. You need to play again to determine your fate.';
    }
    else {
        resultsEl.innerText = 'You lose the game. I will lead you to the afterlife.';
    }
}
game()




// Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the rps-ui branch with git status before continuing.
// Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.

//     Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
//     Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
//     If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
//     Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
//     Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push origin --delete rps-ui. Congrats, we’re all done with our cleanup!
