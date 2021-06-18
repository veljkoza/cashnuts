
/*
================================================================================

  "Navigation" component

================================================================================
*/

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Navigation = (() => {
  const toggleNavigation =  function() {
    const hamburgerBtnElem = this;
    const headerElem = document.querySelector('.header');
    const navElem = document.querySelector('.nav');

    if (!navElem.classList.contains('js-open')) {
      disableBodyScroll(navElem);
      navElem.classList.add('js-open');
      headerElem.classList.add('js-black-bg');
      hamburgerBtnElem.classList.add('js-open');
    } else {
      enableBodyScroll(navElem);
      navElem.classList.remove('js-open');
      headerElem.classList.remove('js-black-bg');
      hamburgerBtnElem.classList.remove('js-open');
    }
  };

  const toggleMobileDropdown = function() {
    const linkElem = this;
    const dropdownElem = linkElem.nextElementSibling;

    if (!dropdownElem.classList.contains('js-open')) {
      linkElem.classList.add('js-open');
      dropdownElem.classList.add('js-open');
    } else {
      linkElem.classList.remove('js-open');
      dropdownElem.classList.remove('js-open');
    }
  };

  const initEventListeners = function() {
    if (document.querySelector('.nav')) {
      const hamburgerBtnElem = document.querySelector('.header__hamburger-btn');
      const linksWithDropdownList = document.querySelectorAll('.nav__link--dropdown');

      hamburgerBtnElem.addEventListener('click', toggleNavigation);

      Array.from(linksWithDropdownList, (link) => {
        link.addEventListener('click', toggleMobileDropdown);
      });
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Navigation;
