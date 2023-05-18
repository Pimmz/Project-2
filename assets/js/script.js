//jshint esversion: 11


//Timer area

const timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let intervalId;

function startTimer() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        timer.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    seconds = 0;
    minutes = 0;
    timer.textContent = "00:00";
}

function endGame() {
    stopTimer();
    setTimeout(function () {
        alert('GAME OVER, CONGRATULATIONS! Can you complete it quicker?');
        localStorage.setItem("score", seconds);
    }, 1000);
}

document.querySelector(".reset button").addEventListener("click", () => {
    resetTimer();
});

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();

    if (document.querySelectorAll('.card:not(.is-flipped)').length === 0) {
        endGame();
    }
}


//allows the cards to match correctly


const cards = document.querySelectorAll(".card");


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let gameStarted = false;

function flipCard() {
    if (gameStarted == false) {
        startTimer();
        gameStarted = true;
    }
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("is-flipped");


    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;

    //Guesses made counter
    {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("demo").innerHTML = sessionStorage.clickcount;
    }

    checkForMatch();
}

function checkGameOver() {
    const numCardsFlipped = document.querySelectorAll('.is-flipped').length;
    const totalCards = 8;
    if (numCardsFlipped === totalCards) {

        endGame();
    }
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
    checkGameOver();
}


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}


function unflipCards() {
    lockBoard = true;


    setTimeout(() => {
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
        resetBoard();
    }, 1500);
}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


cards.forEach(card => card.addEventListener('click', flipCard));


//Game area for cards so they flip over


var cards2 = document.querySelectorAll('.card');


[...cards2].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});



[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});


//How to play button

function test() {
    alert("HOW TO PLAY! 1.Click any card to start, 2. Match the famous quote to the famous person, 3. Complete all four pairs to win. ");
}
document.getElementById('buttonID').onclick = test;



//Reset button area


const resetButton = document.getElementById("reset-btn");


resetButton.addEventListener("click", resetGame);


function resetGame() {
    resetTimer();
    cards.forEach(card => {
        card.classList.remove("is-flipped");
        card.addEventListener('click', flipCard);
    });
    resetBoard();
    sessionStorage.clickcount = 0;
    document.getElementById("demo").innerHTML = sessionStorage.clickcount;
    gameStarted = false;
    console.log(`current score: ${localStorage.getItem("score")}`);
}

//Hi score area

document.addEventListener('', () => {
    let scores = [];
    let container = document.querySelector('#container');
    if (localStorage.getItem('score')) {
        scores = JSON.parse(localStorage.getItem('scores'));
    }

    const currentScore = localStorage.getItem('score');
    if (currentScore) {
        scores.push(Number(currentScore));
        scores.sort((z, a) => z - a);
    }

    scores.sort((z, a) => z - a);
    scores.forEach((score, index) => {
        const row = document.createElement('div');
        row.classList.add('row');

        const rank = document.createElement('span');
        rank.classList.add('rank');
        rank.textContent = index + 1;
        row.appendChild(rank);

        const scoreElement = document.createElement('span');
        scoreElement.classList.add('score');
        scoreElement.textContent = score;
        row.appendChild(scoreElement);

        container.appendChild(row);
    });

    localStorage.setItem('scores', JSON.stringify(scores));

});