const hasTooltips = document.querySelectorAll('.has-tooltip');

//Добавляем блоки с подсказками в документ
for (const hasTooltip of hasTooltips) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = hasTooltip.getAttribute('title');
    hasTooltip.insertAdjacentElement('afterEnd', tooltip);
}
//Находим все добавленные блоки подсказок  в ноду
const newTooltips = document.querySelectorAll('.tooltip');

//Функция удаления всех блоков подсказок на странице
function offAllTooltips() {
    for (const newTooltip of newTooltips) {
        newTooltip.classList.remove('tooltip_active');
    }
}

//Добавляем функцию включения подсказки на событие клика
for (const hasTooltip of hasTooltips) {
    hasTooltip.addEventListener('click', event => {
        event.preventDefault();
        event.target.nextSibling.style.top = (hasTooltip.getBoundingClientRect().top + 20) + 'px';
        event.target.nextSibling.style.left = hasTooltip.getBoundingClientRect().left + 'px';
        if (event.target.nextSibling.classList.contains('tooltip_active')) {
            event.target.nextSibling.classList.remove('tooltip_active');
        } else {
            offAllTooltips();
            event.target.nextSibling.classList.add('tooltip_active');
        }

    });
}
