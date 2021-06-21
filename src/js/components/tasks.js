// task-table__body__item

/*
================================================================================

  "Task" component

================================================================================
*/



const Tasks = (() => {
    const tasks = document.getElementsByClassName("task-table__body__item");
    const initEventListeners = function () {

  
      [...tasks].forEach((task) => {
        task.addEventListener("click", () => {
          document.location.href = './index.html';
        });
      });
  
    
    };
  
    const init = function () {
      initEventListeners();
    };
  
    return {
      init: init,
    };
  })();
  
  export default Tasks;
  
