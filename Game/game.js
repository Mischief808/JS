let playGame=confirm("shall we play rock,paper,scissors.");
if(playGame)
{
    let playerChoice=prompt("Please enter rock,paper,scissors.");
    if(playerChoice) 
    {
        let playerOne=playerChoice.trim().toLowerCase();
        if(playerOne === "paper"||playerOne === "rock"|| playerOne==="scissors")
        {
            let computerChoice=Math.floor(Math.random() *3 + 1);
            let computer=computerChoice === 1 ? "rock": 
               computerChoice === 2 ? "paper" :
               "scissors";
        let result = 
           playerOne === computer
           ? "Tie Game!"
           :playerOne === "rock" && computer === "paper"
            ? `playerOne:${playerOne}\nComputer:${computer}\n
               Computer Wins!`
            :playerOne === "rock" && computer === "scissors"
            ? `PlayerOne:${playerOne}\nComputer:${computer}\n
               Player Wins!`
            :playerOne === "paper" && computer === "scissors"
            ? `PlayerOne:${playerOne}\nComputer:${computer}\n
               Computer Wins`
            :playerOne === "scissors" && computer === "rock"
             ?`PlayerOne:${playerOne}\nComputer:${computer}\n
               Computer Wins`
            :`PlayerOne:${playerOne}\nComputer:${computer}\n
            Player Wins`
        alert(result);
        let playAgain=confirm("Do You Want TO Play Again??")
        playAgain ? location.reload() : alert("Thanks for Playing");
        } else {
            alert("You didn't enter rock,paper, or scissors.");
        }
    }else {
        alert("Your Mind has Changed,Maybe next time.");
    }
} else {
    alert("Ok,Next time.");
}
