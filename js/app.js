const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        closeAllSlides();
        if (slide.classList.contains('active')) {
            slide.classList.remove('active')
            console.log('hello');
        } else slide.classList.add('active')

    })
}

function closeAllSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
}