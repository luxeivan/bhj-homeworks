function downSecond(){
    let timer = document.getElementById("timer");
    if(timer.textContent == 1) {
        alert("Вы победили в конкурсе");
        timer.textContent = 59;
    }
    timer.textContent = timer.textContent - 1;
    console.log(timer.textContent);
}
setInterval(downSecond, 1000);