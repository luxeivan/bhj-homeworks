let cookie = document.getElementById("cookie"),
    clicker__counter = document.getElementById("clicker__counter");
cookie.onclick = function () {
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
};