import { n, width, speed } from "./sort.js";

let c_delay = 0;
let delay_time = 10000 / (Math.floor(n / 30) * speed);

function div_update(cont, h, color) {
  setTimeout(() => {
    cont.style = `
      background: ${color};
      width: ${width}%;
      height: ${h}%;
      box-shadow: 2px -2px 3px #5F5F5F, 2px -2px 3px white;
    `;
  }, c_delay += delay_time);
}

export function selection(divs, arr) {
  c_delay = 0;
  delay_time = 10000 / (Math.floor(n / 30) * speed);

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    div_update(divs[2 * minIdx + 1], arr[minIdx], "purple"); // assume min

    for (let j = i + 1; j < n; j++) {
      div_update(divs[2 * j + 1], arr[j], "red"); // comparing

      if (arr[j] < arr[minIdx]) {
        div_update(divs[2 * minIdx + 1], arr[minIdx], "#808080"); // reset old min
        minIdx = j;
        div_update(divs[2 * minIdx + 1], arr[minIdx], "purple"); // new min
      } else {
        div_update(divs[2 * j + 1], arr[j], "#808080"); // reset
      }
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];

    div_update(divs[2 * i + 1], arr[i], "green"); // sorted
    div_update(divs[2 * minIdx + 1], arr[minIdx], "#808080"); // restore color
  }

  div_update(divs[2 * (n - 1) + 1], arr[n - 1], "green");
}
