function getComputerChoice(){
    const choiceArr = ["rock","paper","scissors"];
    const choiceIndex = Math.floor(Math.random() * 3 );
    return choiceArr[choiceIndex];
}

function getHumanChoice(){
    const choice = prompt("Please choose(rock/paper/scissors:)");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    

    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        console.log("Rock beats Scissors");
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        console.log("Scissors beats paper");
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        console.log("Rock beats Scissors");
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        console.log("Paper beats Rock");
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("Paper beats Rock");
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        console.log("Scissors beats Paper");
    }
}
    for(let i = 0;i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice());
        
    }

    console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
}

playGame();




