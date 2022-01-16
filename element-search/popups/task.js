let modal_main = document.getElementById("modal_main"),
    modal_success = document.getElementById("modal_success"),
    modals__close = document.getElementsByClassName("modal__close_times");

modal_main.classList.add("modal_active");
modal_main.getElementsByClassName("show-success")[0].onclick = function () {
    modal_main.classList.remove("modal_active");
    modal_success.classList.add("modal_active");
};
modal_success.onclick = function () {

};
for (let i = 0; i < modals__close.length; i++) {
    modals__close[i].onclick = function(){
        this.closest(".modal").classList.remove("modal_active");
    };
}

