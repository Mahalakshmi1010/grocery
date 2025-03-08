
const slides = document.querySelector('.slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
const totalSlides = 8;
const visibleSlides = 3;

prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalSlides - visibleSlides;
    updateSlider();
});

next.addEventListener('click', () => {
    index = (index < totalSlides - visibleSlides) ? index + 1 : 0;
    updateSlider();
});

function updateSlider() {
    slides.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
}


