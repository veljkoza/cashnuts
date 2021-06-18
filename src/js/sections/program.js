
/*
================================================================================

  "Program" section

================================================================================
*/

import Swiper from 'swiper';

const Program = (() => {
  const initProgramSlider = function() {
    const programElem = document.querySelector('.program');
    const sliderElem = document.querySelector('.program__slider');
    const prevBtnElem = programElem.querySelector('.slider-nav__btn--prev');
    const nextBtnElem = programElem.querySelector('.slider-nav__btn--next');

    new Swiper(sliderElem, {
      slidesPerView: 1.2,
      spaceBetween: 20,
      speed: 600,
      navigation: {
        prevEl: prevBtnElem,
        nextEl: nextBtnElem
      },
      breakpoints: {
        1280: {
          slidesPerView: 2.7,
          spaceBetween: 50
        },
        1024: {
          slidesPerView: 2.7,
          spaceBetween: 30
        },
        568: {
          slidesPerView: 2.2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1.8,
          spaceBetween: 20
        }
      }
    });
  };

  const initEventListeners = function() {
    if (document.querySelector('.program')) {
      initProgramSlider();
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Program;
