document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.showcase-two');
ScrollReveal().reveal('.showcase-three');
ScrollReveal().reveal('.showcase-four');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });