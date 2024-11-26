/**move button down by 5px at click
 *
 */
function onmouseclickMoveDown(e) {
  e.classList.remove("move_btn_up_at_click");
  e.classList.add("move_btn_down_at_click");
}

/**reset button location at mouse up
 *
 */
function onmouseUpMoveUp(e) {
  e.classList.remove("move_btn_down_at_click");
  e.classList.add("move_btn_up_at_click");
}

/**
 * show close button with animation
 * get collapse ul
 */

let mainDiv = document.querySelector(".collapse");
let bars = document.querySelector(".fa-solid");

function showClose() {
  if (
    bars.classList.contains("fa-close") &&
    bars.classList.contains("blink_bars")
  ) {
    bars.classList.replace("blink_bars", "blink_back");
    setInterval(() => {
      bars.classList.remove("blink_back");
    }, 800);

    bars.classList.replace("fa-close", "fa-bars");
  } else if (bars.classList.contains("fa-bars")) {
    bars.classList.replace("fa-bars", "fa-close");
    bars.classList.add("blink_bars");
  }
}

/**
 * hide ul
 */
function close_panel() {
  mainDiv.classList.remove("show");
}

