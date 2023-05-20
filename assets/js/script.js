//jshint esversion: 11

//Timer area
document.addEventListener('DOMContentLoaded', () => {
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
            const scoreId = Math.floor(Math.random() * 1000)
            localStorage.setItem(`score_${scoreId}`, seconds);
            document.getElementById('rank').innerText = "Rank ";
            document.getElementById('score').innerText = "Score ";
            loadScores();
            clickCount = 0;
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
    let clickCount = 0;


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
        clickCount = clickCount + 1;
        document.getElementById("demo").innerHTML = clickCount;

        //Guesses made counter
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
        clickCount = 0;
        document.getElementById("demo").innerHTML = clickCount;
        gameStarted = false;
    }

    //Hi score area

    function loadScores() {
        const scoreKeys = Object.keys(localStorage);
        const scoreList = [];
        scoreKeys.forEach(function (scoreKey, index) {
            scoreList.push(localStorage.getItem(scoreKey));
        });
        scoreList.sort(function (a, b) {
            return a - b;
        });
        scoreList.slice(0, 5).forEach(function (scoreKey, index) {
            const rank = document.getElementById('rank').innerText;
            document.getElementById('rank').innerText = rank + '--' + (index + 1);
            const score = document.getElementById('score').innerText;
            document.getElementById('score').innerText = score + '--' + scoreKey;
        });
    }

    

});












