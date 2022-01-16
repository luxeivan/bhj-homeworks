function downSecond(){
    let timer = document.getElementById("timer");
    if(timer.textContent == 1) {
        alert("Вы победили в конкурсе");
        clearInterval(interval);
    }
    timer.textContent = timer.textContent - 1;
    console.log(timer.textContent);
}
let interval = setInterval(downSecond, 1000);