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

export function mergeSort(divs, arr) {
  c_delay = 0;
  delay_time = 10000 / (Math.floor(n / 30) * speed);

  merge_sort(divs, arr, 0, n - 1);

  // Final color pass
  for (let i = 0; i < n; i++) {
    div_update(divs[2 * i + 1], arr[i], "green");
  }
}

function merge_sort(divs, arr, l, r) {
  if (l < r) {
    const m = Math.floor((l + r) / 2);
    merge_sort(divs, arr, l, m);
    merge_sort(divs, arr, m + 1, r);
    merge(divs, arr, l, m, r);
  }
}

function merge(divs, arr, l, m, r) {
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);

  let i = 0, j = 0, k = l;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      div_update(divs[2 * k + 1], arr[k], "red");
      i++;
    } else {
      arr[k] = right[j];
      div_update(divs[2 * k + 1], arr[k], "red");
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    div_update(divs[2 * k + 1], arr[k], "red");
    i++; k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    div_update(divs[2 * k + 1], arr[k], "red");
    j++; k++;
  }

  // Mark as default again
  for (let t = l; t <= r; t++) {
    div_update(divs[2 * t + 1], arr[t], "#808080");
  }
}
