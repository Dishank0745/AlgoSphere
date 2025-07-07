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

export function heap(divs, arr) {
  c_delay = 0;
  delay_time = 10000 / (Math.floor(n / 30) * speed);

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(divs, arr, n, i);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    div_update(divs[2 * 0 + 1], arr[0], "red");
    [arr[0], arr[i]] = [arr[i], arr[0]];
    div_update(divs[2 * i + 1], arr[i], "green");
    heapify(divs, arr, i, 0);
  }

  div_update(divs[2 * 0 + 1], arr[0], "green"); // Final element
}

function heapify(divs, arr, size, root) {
  let largest = root;
  let left = 2 * root + 1;
  let right = 2 * root + 2;

  div_update(divs[2 * root + 1], arr[root], "red");

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== root) {
    [arr[root], arr[largest]] = [arr[largest], arr[root]];
    div_update(divs[2 * root + 1], arr[root], "#808080");
    div_update(divs[2 * largest + 1], arr[largest], "#808080");
    heapify(divs, arr, size, largest);
  }
}
