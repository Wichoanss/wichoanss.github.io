document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = inner.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000);
    });
});
