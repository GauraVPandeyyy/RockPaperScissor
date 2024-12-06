
// let rock = document.getElementById("rock");
// let paper = document.getElementById("paper");
// let scissor = document.getElementById("scissor");
let showResult = document.getElementById("showResult");

let playerScore = document.getElementById("player");
let computerScore = document.getElementById("computer");

let userWon = 0;
let compWon = 0;

playerScore.innerHTML = `<p>PLAYER</p> <h1> ${userWon} </h1>`;
computerScore.innerHTML = `<p>COMPUTER</p> <h1> ${compWon} </h1>`;
function randomNum () {
    const min = 1;
    const max = 3;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// const rockNum = 1;
// const paperNum = 2;
// const scissorNum = 3;
function printAns(winner, user) {
    if (winner == user) {
        // console.log(`${user} USER is winner`);
        showResult.innerHTML = "<h1>Congratulations !!  YOU WON</h1>";
        userWon += 1;
        playerScore.innerHTML = `<p>PLAYER</p> <h1> ${userWon} </h1>`
    }
    else {
        console.log(`${comp} COMPUTER is winner`);
        showResult.innerHTML = "<h1>COMPUTER WON !!!</h1>";
        compWon += 1;
        computerScore.innerHTML = `<p>COMPUTER</p> <h1> ${compWon} </h1>`
    }
}
function checkCond(user, comp) {
    if (user == comp) {
        console.log(`Match DRAW`);
        showResult.innerHTML = "<h1>MATCH DRAW!!!!!!!</h1>";
    }
    else if (Math.abs(user - comp) == 1) {
        let winner = Math.max(user, comp);
        return printAns(winner, user)
    }
    else if (Math.abs(user - comp) == 2) {
        let winner = Math.min(user, comp);
        return printAns(winner, user)
    }

}
// Get the hand elements
const leftHand = document.getElementById("leftHand");
const rightHand = document.getElementById("rightHand");

function animateHand(hand, animationClass) {
    if (!hand.classList.contains(animationClass)) {
        hand.classList.add(animationClass);
        setTimeout(() => {
            hand.classList.remove(animationClass);
        }, 2500);
    }
}

let user = 0;
let comp = 0;

function changeBigPicture(user, comp) {
    if (user === 2) {
        leftHand.style.backgroundImage = "url('./assets/RPaper.png')";
    } else if (user === 3) {
        leftHand.style.backgroundImage = "url('./assets/RScissor.png')";
    } else {
        leftHand.style.backgroundImage = "url('./assets/Rrock.png')";
    }

    if (comp === 2) {
        rightHand.style.backgroundImage = "url('./assets/Lpaper.png')";
    } else if (comp === 3) {
        rightHand.style.backgroundImage = "url('./assets/LScissor.png')";
    } else {
        rightHand.style.backgroundImage = "url('./assets/LRock.png')";
    }
}

function resetHands() {
    setTimeout(() => {
        leftHand.style.backgroundImage = "url('./assets/Rrock.png')";
        rightHand.style.backgroundImage = "url('./assets/LRock.png')";
        showResult.innerHTML = "<h1>RESULTS !!</h1>";
        
    }, 2000);
}

function startGame(userTemp) {
    animateHand(leftHand, "animate-left");
    animateHand(rightHand, "animate-right");

    setTimeout(() => {
        user = userTemp;
        comp = randomNum();
        changeBigPicture(user, comp);
    }, 1000);

    setTimeout(() => {
        checkCond(user, comp);
        resetHands(); // Reset the hands to default state
    }, 2800);
}


document.getElementById("rock").addEventListener("click", (event) => {
    event.preventDefault();
    startGame(1);
});

document.getElementById("paper").addEventListener("click", (event) => {
    event.preventDefault();
    startGame(2);
});

document.getElementById("scissor").addEventListener("click", (event) => {
    event.preventDefault();
    startGame(3);
});
