let rndmDiceNum1 = 0;
let rndmDiceNum2 = 0;
let isPlayer1Chance = true;
let rounds = 0;
let p1Count = 0;
let p2Count = 0;
let gameStarted = false; // Flag to check if the game has started

function addNames() {
    var player1 = document.getElementsByName("player1Name")[0].value;//obtain entered names
    var player2 = document.getElementsByName("player2Name")[0].value;

    if (player1.length === 0) {
        alert("Player 1 name must be entered!");
        return false;
    }

    if(player2.length === 0)
    {
        alert("Player 2 name must be entered!");
        return false;
    }

    document.querySelector(".left").innerHTML = player1; //player names change
    document.querySelector(".right").innerHTML = player2;

    document.querySelector(".tp1").innerHTML = player1;//score board names change
    document.querySelector(".tp2").innerHTML = player2;

    gameStarted = true; // Set the flag to true when the game starts

    return false;
}

function newgame() {
    document.querySelector(".left").innerHTML = "Player 1";
    document.querySelector(".right").innerHTML = "Player 2";

    document.getElementsByName("player1Name")[0].value = "";
    document.getElementsByName("player2Name")[0].value = "";

    document.querySelector(".lefth2").style.display = "none";
    document.querySelector(".righth2").style.display = "none";
    document.querySelector(".draw").style.display = "none";

    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
    document.querySelector("h1").innerHTML = "DICE GAME";

    document.getElementsByClassName("rounds")[0].innerHTML = "0";
    document.getElementsByClassName("score1")[0].innerHTML = "0";
    document.getElementsByClassName("score2")[0].innerHTML = "0";

    document.querySelector(".tp1").innerHTML = "Player 1";//score board names change
    document.querySelector(".tp2").innerHTML = "player 2";



    rounds = 0;
    p1Count = 0;
    p2Count = 0;
    isPlayer1Chance = true;
    gameStarted = false; // Reset the flag when starting a new game
}

function player1() {
    if (!gameStarted) {
        alert("Click 'Start' to begin the game!");
        return;
    }

    if (!isPlayer1Chance) {
        alert("It's Player 2's turn!");
        return;
    }

    document.querySelector("h1").innerHTML = "DICE GAME";

    document.querySelector(".lefth2").style.display = "none";
    document.querySelector(".righth2").style.display = "none";
    document.querySelector(".draw").style.display = "none";

    rndmDiceNum1 = Math.floor(Math.random() * 6 + 1);
    let dice1Name = "images/dice" + rndmDiceNum1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", dice1Name);

    isPlayer1Chance = false;
}

function player2() {
    if (!gameStarted) {
        alert("Click 'Start' to begin the game!");
        return;
    }

    if (isPlayer1Chance) {
        alert("It's Player 1's turn!");
        return;
    }

    rounds += 1;
    document.getElementsByClassName("rounds")[0].innerHTML = rounds;

    document.querySelector(".lefth2").style.display = "none";
    document.querySelector(".righth2").style.display = "none";

    rndmDiceNum2 = Math.floor(Math.random() * 6 + 1);
    let dice2Name = "images/dice" + rndmDiceNum2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", dice2Name);

    // Determine the winner after Player 2 rolls
    if (rndmDiceNum1 > rndmDiceNum2) {
        document.querySelector(".lefth2").style.display = "block";
        p1Count += 1;
        document.getElementsByClassName("score1")[0].innerHTML = p1Count;
    } else if (rndmDiceNum1 < rndmDiceNum2) {
        document.querySelector(".righth2").style.display = "block";
        p2Count += 1;
        document.getElementsByClassName("score2")[0].innerHTML = p2Count;
    } else {
        document.querySelector(".draw").style.display = "block";
    }

    isPlayer1Chance = true;
}
