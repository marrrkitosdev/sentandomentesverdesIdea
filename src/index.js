let links = document.querySelector("#links");
let icon = document.querySelector("#icon");
let presentacionBtn = document.querySelector("#presentacionBtn");
let imgLogo = document.querySelector("#imgLogo");

document.addEventListener('DOMContentLoaded', function () {
    icon.addEventListener("click", function () {
        links.classList.toggle("hidden");
    });

    imgLogo.addEventListener("click", function () {
        setTimeout(() => {
            imgLogo.classList.toggle("logoActivo");
        }, 1500);
        imgLogo.classList.toggle("logoActivo");
    })

    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    showSlide(currentIndex);
});
