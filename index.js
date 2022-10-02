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


let homeScore = 0
let guestScore = 0

function threePoints() {
    homeScore += 3
    document.getElementById("home-score").innerText = homeScore
}

function twoPoints() {
    homeScore += 2
    document.getElementById("home-score").innerText = homeScore
}

function onePoint() {
    homeScore += 1
    document.getElementById("home-score").innerText = homeScore
}

function gThreePoints() {
    guestScore += 3
    document.getElementById("guest-score").innerText = guestScore
}

function gTwoPoints() {
    guestScore += 2
    document.getElementById("guest-score").innerText = guestScore
}

function gOnePoint() {
    guestScore += 1
    document.getElementById("guest-score").innerText = guestScore
}

function reset() {
    
    document.getElementById("home-score")("guest-score").innerText = 0
}

