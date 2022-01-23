let tabCollection = document.querySelector('#tabs1').querySelectorAll('.tab'),
    tabContenCollection = document.querySelector('#tabs1').querySelectorAll('.tab__content');

function removeAllActive(){
    for (const tab of tabCollection) {
        tab.classList.remove('tab_active');
    }
    for (const tab of tabContenCollection) {
        tab.classList.remove('tab__content_active');
    }
}
function changeTab(index) {
    removeAllActive();
    tabCollection[index].classList.add('tab_active');
    tabContenCollection[index].classList.add('tab__content_active');
}
for (let i = 0; i < tabCollection.length; i++) {
    tabCollection[i].addEventListener('click', () => changeTab(i));
}