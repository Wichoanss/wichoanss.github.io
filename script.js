document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        let currentIndex = 0;

        setInterval(() => {
            const images = inner.children;
            currentIndex = (currentIndex + 1) % images.length;
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000);
    });
});
