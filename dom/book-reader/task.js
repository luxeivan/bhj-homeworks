let fontSizes = document.querySelectorAll('.font-size'),
    bookContent = document.querySelector('.book');

for (let i = 0; i < fontSizes.length; i++) {
    fontSizes[i].addEventListener('click', (event) => {
        event.preventDefault();

        for (const fontSize of fontSizes) {
            fontSize.classList.remove('font-size_active');
        }
        bookContent.className = 'book';

        fontSizes[i].classList.add('font-size_active');
        if (fontSizes[i].dataset.size){
            bookContent.classList.add('book_fs-'+ fontSizes[i].dataset.size);
        }
    });
}