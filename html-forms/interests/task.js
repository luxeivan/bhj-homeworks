let interestChecks = document.querySelectorAll('.interest__check');
for (const interestCheck of interestChecks) {
    interestCheck.addEventListener('change', event => {
        if (event.target.closest('.interest').querySelector('.interests_active')) {
            for (const changeItem of event.target.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check')) {
                changeItem.checked ? changeItem.checked = false : changeItem.checked = true;
            }
        }
    });
}
