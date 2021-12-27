//Tabs
let matchesTabBtn = document.getElementById('matchesTab');
let battlesTabBtn = document.getElementById('battlesTab');
let matchesTabSlider = document.getElementById('matchesSlider');
let battlesTabSlider = document.getElementById('battlesSlider');

matchesTabBtn.addEventListener("click", (ev) => {
    matchesTabBtn.classList.add("tabs__btn--active");
    battlesTabBtn.classList.remove("tabs__btn--active");
    battlesTabSlider.classList.add("visibility");
    matchesTabSlider.classList.remove("visibility");
});
battlesTabBtn.addEventListener("click", (ev) => {
    battlesTabBtn.classList.add("tabs__btn--active");
    matchesTabBtn.classList.remove("tabs__btn--active");
    matchesTabSlider.classList.add("visibility");
    battlesTabSlider.classList.remove("visibility");
});