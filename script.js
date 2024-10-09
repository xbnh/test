const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

let score = 0;
let timeLeft = 30;
let gameInterval;
let countdownInterval;

// Randomly move the target within the game area
function moveTarget() {
    const gameArea = document.querySelector('.game-area');
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

// Handle target click event
target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget(); // Move the target to a new location after every click
});

// Countdown timer for the game
function startCountdown() {
    countdownInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            clearInterval(gameInterval);
            alert(`Game over! Your final score is ${score}`);
        }
    }, 1000);
}

// Start the game
function startGame() {
    moveTarget();
    gameInterval = setInterval(moveTarget, 1000); // Target moves every second
    startCountdown();
}

// Start the game as soon as the page loads
startGame();