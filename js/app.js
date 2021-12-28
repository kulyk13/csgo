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