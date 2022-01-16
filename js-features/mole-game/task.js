let dead = document.getElementById("dead"),
    lost = document.getElementById("lost");
function finishGame(text) {
    alert(text);
    dead.textContent = 0;
    lost.textContent = 0;
}
function clickFun() {
    this.className == "hole hole_has-mole" ? dead.textContent = Number(dead.textContent) + 1 : lost.textContent = Number(lost.textContent) + 1;
    if (dead.textContent == 10) {
        finishGame("Вы выйграли!")
    }
    if (lost.textContent == 5) {
        finishGame("Вы проиграли!")
    }
};
for (let i = 1; i < 10; i++) {
    document.getElementById("hole" + String(i)).onclick = clickFun
}