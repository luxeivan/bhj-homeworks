let rotatorCase = document.querySelector('.rotator').querySelectorAll('.rotator__case'),
    rotatorPosition = 0;

function rotate() {
    rotatorCase[rotatorPosition].classList.remove('rotator__case_active');
    rotatorPosition == rotatorCase.length - 1 ? rotatorPosition = 0 : rotatorPosition += 1;
    rotatorCase[rotatorPosition].classList.add('rotator__case_active');
}
setInterval(rotate, 1000)