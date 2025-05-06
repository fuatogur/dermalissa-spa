document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.home-sweet-biggest-banner nav ul li a');
    const infoBoxes = document.querySelectorAll('.home-sweet-biggest-banner .product-detail-rg-bar:last-of-type > article');

    links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const slideIndex = parseInt(link.dataset.slide);
            homeSwiper.slideTo(slideIndex, 0);
            infoBoxes.forEach((box, i) => {
                box.style.display = i === slideIndex ? 'block' : 'none';
            });
            links.forEach(link => link.classList.remove('open'));
            link.classList.add('open');
        });
    });

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: false
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const images = document.querySelectorAll('.matrix-image');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        const maxScroll = 600;
        const clampedScroll = Math.min(Math.max(scrollY, 0), maxScroll);

        const rotate = 24 - (clampedScroll / maxScroll) * 24;
        const width = 65 - (clampedScroll / maxScroll) * 10;

        const translateStart = 150;
        const translateMax = 65;

        let translateY = 0;
        if (clampedScroll > translateStart) {
            const translateProgress = (clampedScroll - translateStart) / (maxScroll - translateStart);
            translateY = translateProgress * translateMax;
        }

        images.forEach(image => {
            image.style.transform = `rotate(${rotate}deg) translateY(${translateY}%)`;
            image.style.width = `${width}%`;
        });
    });
});

