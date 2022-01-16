let slider__items = document.getElementsByClassName("slider__item");
function changeSlide(direction) {
    for (let i = 0; i < slider__items.length; i++) {
        let n = i;
        if (direction == "next") n += 1;
        if (direction == "prev") n -= 1;
        if (n == -1) n = slider__items.length - 1;
        if (n == slider__items.length) n = 0;
        if (slider__items[i].classList.contains("slider__item_active")) {
            slider__items[i].classList.remove("slider__item_active");
            slider__items[n].classList.add("slider__item_active");
            return true;
        }
    }
}
document.querySelector(".slider__arrow_prev").onclick = function () {
    changeSlide("prev");
}
document.querySelector(".slider__arrow_next").onclick = function () {
    changeSlide("next");
}
