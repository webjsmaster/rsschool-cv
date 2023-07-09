const dotLeft = document.querySelector('#dot-left');
const dotRight = document.querySelector('#dot-right');

const button = document.querySelector('.button-up');


window.addEventListener('scroll', () => {
    const pageHeight = document.documentElement.scrollHeight;
    const windowInnerHeight = window.innerHeight;

    const referenceValue = pageHeight - windowInnerHeight;
    const percentageScroll = Math.floor(Math.ceil(window.pageYOffset) * 100 / referenceValue);

    const dotHeight = pageHeight*(percentageScroll / 100);

    if (percentageScroll > 50) {
        dotLeft.style.top = `${dotHeight - 15}px`;
        dotRight.style.top = `${dotHeight - 15}px`;
    } else {
        dotLeft.style.top = `${dotHeight}px`;
        dotRight.style.top = `${dotHeight}px`;
    }

    if (dotHeight > 20) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
})


button.addEventListener('click', () => {
    window.scroll(0, 0);
})






;

;


//^ JS-функция определения поддержки WebP
document.addEventListener('DOMContentLoaded', function() {
    testWebP(document.body)
})
function testWebP(elem) {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add('webp-true') : elem.classList.add('webp-false')
    }
}