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

export function bubble(divs, arr) {
  c_delay = 0;
  delay_time = 10000 / (Math.floor(n / 30) * speed);

  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n - i; j++) {
      // Highlight comparison
      div_update(divs[2 * (j - 1) + 1], arr[j - 1], "red");
      div_update(divs[2 * j + 1], arr[j], "red");

      if (arr[j] < arr[j - 1]) {
        // Swap values
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }

      // Restore colors
      div_update(divs[2 * (j - 1) + 1], arr[j - 1], "#808080");
      div_update(divs[2 * j + 1], arr[j], "#808080");
    }

    // Mark the sorted element
    div_update(divs[2 * (n - i - 1) + 1], arr[n - i - 1], "green");
  }

  // Mark the first element as sorted
  div_update(divs[1], arr[0], "green");
}
