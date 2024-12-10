export function debounce(callback, delay) {
  let timeout;
  return function(...args) {
    if (timeout) clearTimeout(timeout);
  
    timeout = setTimeout(() => callback.apply(null, args), delay);
  }
}