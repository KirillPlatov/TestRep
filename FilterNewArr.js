function filterRange(arr, min, max) {
  return arr.filter((number) => number >= min && number <= max);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);