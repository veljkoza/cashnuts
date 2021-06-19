/*
================================================================================

  "Modal" component

================================================================================
*/

const Agenda = (() => {
  const calendar = document.getElementById("calendar");

  let items = [
    {
      title: "Meeting",
      day: 0,
      start: {
        hour: 9,
        minute: 30,
      },
      end: {
        hour: 11,
        minute: 15,
      },
    },
    {
      title: "Drugi meeting",
      day: 3,
      start: {
        hour: 13,
        minute: 15,
      },
      end: {
        hour: 15,
        minute: 10,
      },
    },
    {
        title: "Another meeting",
        day: 1,
        start: {
          hour: 15,
          minute: 15,
        },
        end: {
          hour: 16,
          minute: 10,
        },
      },
  ];
  //100px = 1hour
  const workDay = 1000;
  //1.6px = 1min
  const hour = 100;
  //1 minute = 1.6px
  const minute = 1.6;
  //   total amount of hours in workday
  const workhours = 10;
  //   1day = 14.3%
  const day = 14.3;
  const addItem = (item) => {
    let startH = Math.abs(workhours - item.start.hour) * hour;
    if (item.start.hour > workhours) {
      startH = (Math.abs(workhours - item.start.hour) + 2) * hour;
    }
    console.log("addItem -> startH", startH);
    let startM = item.start.minute * minute;
    function doubleDigits(n) {
      return n > 9 ? "" + n : "0" + n;
    }

    let topPosition = startH + startM;
    let duration =
      (item.end.hour - item.start.hour) * 100 +
      Math.abs(item.end.minute - item.start.minute) * minute;

    let render = document.createElement("div");
    render.classList.add("item");

    let time = `${doubleDigits(item.start.hour)}:${doubleDigits(
      item.start.minute
    )} - ${doubleDigits(item.end.hour)}:${doubleDigits(item.end.minute)}`;
    render.innerHTML = `<p>${time}</p><p>${item.title}</p>`;

    let left = item.day * day;

    render.style.top = `${topPosition}px`;
    render.style.height = `${duration}px`;
    render.style.left = `${left}%`;

    console.log(render);
    calendar.appendChild(render);
  };

  const addItemsToAgend = function () {
    items.forEach((item) => {
      addItem(item);
    });
  };

  const init = function () {
    addItemsToAgend();
  };

  return {
    init: init,
  };
})();

export default Agenda;
