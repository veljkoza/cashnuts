/*
================================================================================

  "Modal" component

================================================================================
*/

const Modal = (() => {
  const modal = document.getElementById("modal");
  const initEventListeners = function () {
    const closeBtn = document.getElementById("close-modal");
    const buttons = document.querySelectorAll(".btn");

    [...buttons].forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.add("show");
      });
    });

    closeBtn.addEventListener("click", () => {
        console.log("test")
      modal.classList.remove("show");
    });
  };

  const init = function () {
    initEventListeners();
  };

  return {
    init: init,
  };
})();

export default Modal;
