
/*
================================================================================

  "AOS" initialization

================================================================================
*/

import AOS from 'aos';

const AOSAnimations = (() => {
  const init = function() {
    AOS.init();
  };

  return {
    init: init
  };

})();

export default AOSAnimations;
