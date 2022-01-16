let menu__items = document.getElementsByClassName("menu__item");
console.log(menu__items);
for (let i = 0; i < menu__items.length; i++) {
    menu__items[i].querySelector('.menu__link').onclick = function(){
        this.querySelector('.menu_sub').classList.add("menu_active");
        return false;
    };
}