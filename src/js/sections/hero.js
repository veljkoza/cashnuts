
/*
================================================================================

  "Hero" section

================================================================================
*/

import Swiper from 'swiper';

const Hero = (() => {
  const initHeroSlider = function() {
    const heroElem = document.querySelector('.hero');
    const sliderElem = document.querySelector('.hero__slider');
    const prevBtnElem = heroElem.querySelector('.slider-nav__btn--prev');
    const nextBtnElem = heroElem.querySelector('.slider-nav__btn--next');

    new Swiper(sliderElem, {
      autoplay: {
        delay: 3000
      },
      speed: 800,
      navigation: {
        prevEl: prevBtnElem,
        nextEl: nextBtnElem
      }
    });
  };

  const initEventListeners = function() {
    if (document.querySelector('.hero')) {
      initHeroSlider();
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Hero;
