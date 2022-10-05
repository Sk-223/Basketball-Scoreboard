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

function threePoints() {
    homeScoreCard.innerHTML = homeScore += 3
   
}

function twoPoints() {
    homeScoreCard.innerHTML = homeScore += 2
    
}

function onePoint() {
    homeScoreCard.innerHTML = homeScore += 1
}

function gThreePoints() {
    guestScoreCard.innerHTML = guestScore += 3
}

function gTwoPoints() {
    guestScoreCard.innerHTML = guestScore += 2
}

function gOnePoint() {
    guestScoreCard.innerHTML = guestScore += 1
}