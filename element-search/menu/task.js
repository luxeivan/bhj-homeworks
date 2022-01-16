let menu__links = document.getElementsByClassName("menu__link");
function closeAllSubmenu() {
    let subMenus = document.getElementsByClassName("menu_sub");
    for (let i = 0; i < subMenus.length; i++) {
        subMenus[i].classList.remove("menu_active");
    }
};
for (let i = 0; i < menu__links.length; i++) {
    if (menu__links[i].parentElement.querySelector('.menu_sub')) {
        menu__links[i].onclick = function () {
            if (!this.parentElement.querySelector('.menu_sub').classList.contains("menu_active")) {
                closeAllSubmenu();
            }
            this.parentElement.querySelector('.menu_sub').classList.toggle("menu_active");
            return false;
        };
    };

}