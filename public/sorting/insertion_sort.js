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

export function insertion(divs, arr) {
  c_delay = 0;
  delay_time = 10000 / (Math.floor(n / 30) * speed);

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Highlight current key
    div_update(divs[2 * i + 1], arr[i], "red");

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];

      div_update(divs[2 * (j + 1) + 1], arr[j + 1], "red");
      div_update(divs[2 * j + 1], arr[j], "#808080");

      j--;
    }

    arr[j + 1] = key;
    div_update(divs[2 * (j + 1) + 1], arr[j + 1], "#808080");
  }

  // Final pass to mark array as sorted
  for (let i = 0; i < n; i++) {
    div_update(divs[2 * i + 1], arr[i], "green");
  }
}
