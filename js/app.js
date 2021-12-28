//Tabs
let matchesTabBtn = document.getElementById('matchesTab');
let battlesTabBtn = document.getElementById('battlesTab');
let matchesTabs = document.querySelectorAll('.match');
let battlesTabs = document.querySelectorAll('.battle');

matchesTabBtn.addEventListener("click", (ev) => {
    matchesTabBtn.classList.add("tabs__btn--active");
    battlesTabBtn.classList.remove("tabs__btn--active");
    matchesTabs.forEach(function(matchCard) {
        matchCard.classList.remove("visibility");
    });
    battlesTabs.forEach(function(battleCard) {
        battleCard.classList.add("visibility");
    });
});
battlesTabBtn.addEventListener("click", (ev) => {
    battlesTabBtn.classList.add("tabs__btn--active");
    matchesTabBtn.classList.remove("tabs__btn--active");
    matchesTabs.forEach(function(matchCard) {
        matchCard.classList.add("visibility");
    });
    battlesTabs.forEach(function(battleCard) {
        battleCard.classList.remove("visibility");
    });
});

//Timer
let endDate = + new Date() + 930000;

let timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;
    if (t >= 0) {
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        document.getElementById("timerMin").innerHTML = ("0" + mins).slice(-2);
        document.getElementById("timerSec").innerHTML = ("0" + secs).slice(-2);  
    } else {
        document.getElementById("timer").innerHTML = "Время вышло!"
    }
}, 1000)