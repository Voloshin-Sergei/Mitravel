const swiper1 = document.querySelector('.slider-container');
const burger = document.querySelector('.burger');
const close = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

let swiper = new Swiper(swiper1, {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 105,
});

burger.addEventListener('click', () => {
  menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
  menu.classList.remove('menu--visible');
});

