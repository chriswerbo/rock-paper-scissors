function getComputerChoice(){
    const choiceArr = ["rock","paper","scissors"];
    const choiceIndex = Math.floor(Math.random() * 3 );
    return choiceArr[choiceIndex];
}

function getHumanChoice(){
    const choice = prompt("Please choose(rock/paper/scissors:)");
    return choice;
}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    

    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        display.innerText = "Rock beats Scissors";
        display.innerText += `\nHuman: ${humanScore} Computer: ${computerScore}`;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        display.innerText ="Scissors beats paper";
        display.innerText += `\nHuman: ${humanScore} Computer: ${computerScore}`;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        display.innerText = "Rock beats Scissors";
        display.innerText += `\nHuman: ${humanScore} Computer: ${computerScore}`;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        display.innerText = "Paper beats Rock";
        display.innerText += `\nHuman: ${humanScore} Computer: ${computerScore}`;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        display.innerText = "Paper beats Rock";
        display.innerText += `\nHuman: ${humanScore} Computer: ${computerScore}`;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        display.innerText = "Scissors beats Paper";
        display.innerText += `\nHuman: ${humanScore} Computer: ${computerScore}`;
    }

    if(humanScore == 5)
    {
        display.innerText = "Human wins!"
    }
    else if(computerScore == 5){
        display.innerText = "Computer wins!";
    }


}
let computerScore = 0;
let humanScore = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const display = document.getElementById("display");
rock.addEventListener("click",()=>{
    playRound("rock",getComputerChoice());
});

paper.addEventListener("click",()=>{
    playRound("paper",getComputerChoice());
});

scissors.addEventListener("click",()=>{
    playRound("scissors",getComputerChoice());
});







