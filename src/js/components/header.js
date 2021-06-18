
/*
================================================================================

  "Header" component

================================================================================
*/

const Header = (() => {

  const stickyHeader = function() {
    const headerElem = document.querySelector('.header');

    if (window.pageYOffset > 0) {
      headerElem.classList.add('js-sticky');
    } else {
      headerElem.classList.remove('js-sticky');
    }
  };

  const initEventListeners = function() {
    if (document.querySelector('.header')) {
      window.addEventListener('load', stickyHeader);
      window.addEventListener('scroll', stickyHeader);
    }
  };

  const init = function() {
    initEventListeners();
  };

  return {
    init: init
  };

})();

export default Header;
