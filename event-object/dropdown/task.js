let dropdownValue = document.querySelector('.dropdown__value'),
    dropdownLinks = document.querySelectorAll('.dropdown__link');
function openMenu() {
    this.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
}
function changeValue(event) {
    dropdownValue.textContent = this.textContent;
    this.closest('.dropdown__list').classList.remove('dropdown__list_active');
    event.preventDefault();
}

dropdownValue.addEventListener('click', openMenu);

for (const link of dropdownLinks) {
    link.addEventListener('click', changeValue);
}
