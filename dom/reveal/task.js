let reveals = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
    for (const reveal of reveals){
        if (reveal.getBoundingClientRect().bottom < window.innerHeight ){
            reveal.classList.add('reveal_active');
        }
    }
});