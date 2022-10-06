/*Countdown Timer*/

const startingMinutes = 12;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

/*Scoring*/

let homeScore = 0
let guestScore = 0
const homeScoreCard = document.getElementById("home-score");
const guestScoreCard = document.getElementById("guest-score");


function increaseHomeScore(n) {
    homeScoreCard.innerHTML = homeScore += n
}

function increaseGuestScore(n) {
    guestScoreCard.innerHTML = guestScore += n
}