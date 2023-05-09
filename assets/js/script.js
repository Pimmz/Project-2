//Timer area

const timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let intervalId;

function startTimer() {
    intervalId = setInterval(() => {
        seconds++
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

function startGame() {
    startTimer(); 
} 

function endGame() {
    stopTimer(); 
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

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("is-flipped");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
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

const card = document.querySelectorAll('.card');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});


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
}


//How to play button

function test() {
    alert("HOW TO PLAY! 1.Click any card to start, 2. Match the famous quote to the famous person, 3. Complete all four pairs to win. ");
  }
  
  document.getElementById('btnID').onclick = test;
  