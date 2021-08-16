function computerPlay() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomElement = choices[Math.floor(Math.random() * choices.length)]; 
    return randomElement
}

function round() {
    let choice = prompt("Type rock, paper, or scissor");
    let playerChoice = choice.toLowerCase()
    let computerChoice = computerPlay()
    console.log(playerChoice) 
    console.log(computerChoice)
    if (playerChoice == computerChoice) {
        console.log("Draw! Play again.")
        return 'draw'
    }
    else if ((playerChoice == 'rock' && computerChoice == 'scissor') || (playerChoice == 'paper' && computerChoice == 'rock') || (playerChoice == 'scissor' && computerChoice == 'paper')) {
        console.log(`You win, ${playerChoice} beats ${computerChoice}.`) 
        return 'win'
    }
    else if ((playerChoice == 'rock' && computerChoice == 'paper') || (playerChoice == 'paper' && computerChoice == 'scissor') || (playerChoice == 'scissor' && computerChoice == 'rock')) {
        console.log(`You lose, ${computerChoice} beats ${playerChoice}.`)
        return 'lose' 
    }
}

function game() {
    console.log("Let's play a game of rock, paper, scissor. First to 5 wins")
    let computerScore = 0
    let playerScore = 0
    while (playerScore < 5 && computerScore < 5) {
        let result = round()
        if (result == 'win') {
            playerScore += 1
            console.log(`Current standings:\nPlayer: ${playerScore} \nComputer: ${computerScore}`)
        }
        else if (result == 'lose') {
            computerScore += 1
            console.log(`Current standings:\nPlayer: ${playerScore} \nComputer: ${computerScore}`)
        } 
    }
    if (playerScore > computerScore) {
        console.log("Congratulations, you win!")
    }
    else {
        console.log("Nice try, better luck next time!")
    }

}

game() 
