//CASHING DOM

const result = document.querySelector("#result > h1");
const lose_h1 = document.getElementById("lose");
const win_h1 = document.getElementById("win");
const draw_h1 = document.getElementById("draw");
const restartButton = document.querySelector("#restart button");
const player1_img = document.getElementById("player1");
const player2_img = document.getElementById("player2");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissor_button = document.getElementById("scissors");

restartButton.addEventListener("click", restart);

function restart() {
    window.location.reload();
}

function getCompChoice() {
 const choices = ['rock', 'paper', 'scissors'];
 const randomNumber = Math.floor(Math.random() * 3);
 return choices[randomNumber];
 console.log(choices[randomNumber]);
}

function win(userChoice, compChoice) {
    console.log (userChoice + compChoice);
    console.log("WIN");
    player1_img.classList.add(userChoice);
    player2_img.classList.add(compChoice);
    win_h1.classList.remove("hidden");
}

function lose(userChoice, compChoice) {

    player1_img.classList.add(userChoice);
    player2_img.classList.add(compChoice);
    lose_h1.classList.remove("hidden");
}

function draw(userChoice, compChoice) {
    player1_img.classList.add(userChoice);
    player2_img.classList.add(compChoice);
    draw_h1.classList.remove("hidden");
}

function game(userChoice) {

 //console.log("userChoice is: " + userChoice);
 const compChoice = getCompChoice();
 //console.log(compChoice);
 switch(userChoice + compChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
            win(userChoice, compChoice);
    break;

    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
            console.log("USER LOSES...");
            //lose_h1.classList.remove("hidden");
            lose(userChoice, compChoice);
    break;

    case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
                //console.log("IT'S A DRAW");
                draw(userChoice, compChoice);
        break;
 }
}

function main (){
    rock_button.addEventListener("click", function() {
        game("rock");
    })

    paper_button.addEventListener("click", function() {
    game("paper");
    })

    scissor_button.addEventListener("click", function() {
        game("scissors");
    })
}

main();

