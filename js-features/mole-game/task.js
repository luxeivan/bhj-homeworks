let dead = document.getElementById("dead"),
    lost = document.getElementById("lost");
function clickFun() {
    this.className == "hole hole_has-mole" ? dead.textContent = Number(dead.textContent) + 1 : lost.textContent = Number(lost.textContent) + 1;
    if (dead.textContent == 10) {
        alert("Вы выйграли!");
        dead.textContent = 0;
        lost.textContent = 0;
    }
    if (lost.textContent == 5) {
        alert("Вы проиграли!");
        dead.textContent = 0;
        lost.textContent = 0;
    }
};
for (let i = 1; i < 10; i++) {
    document.getElementById("hole" + String(i)).onclick = clickFun
}