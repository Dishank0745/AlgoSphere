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

export function quick(divs, arr) {
  c_delay = 0;
  delay_time = 10000 / (Math.floor(n / 30) * speed);

  quickSort(divs, arr, 0, n - 1);

  for (let i = 0; i < n; i++) {
    div_update(divs[2 * i + 1], arr[i], "green");
  }
}

function quickSort(divs, arr, low, high) {
  if (low < high) {
    const pivotIndex = partition(divs, arr, low, high);
    quickSort(divs, arr, low, pivotIndex - 1);
    quickSort(divs, arr, pivotIndex + 1, high);
  }
}

function partition(divs, arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  div_update(divs[2 * high + 1], arr[high], "purple"); // Highlight pivot

  for (let j = low; j < high; j++) {
    div_update(divs[2 * j + 1], arr[j], "red");

    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];

      div_update(divs[2 * i + 1], arr[i], "#808080");
      div_update(divs[2 * j + 1], arr[j], "#808080");
    } else {
      div_update(divs[2 * j + 1], arr[j], "#808080");
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  div_update(divs[2 * (i + 1) + 1], arr[i + 1], "#808080");
  div_update(divs[2 * high + 1], arr[high], "#808080");

  return i + 1;
}
