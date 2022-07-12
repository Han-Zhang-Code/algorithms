/* eslint-disable no-console */
function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i])) return false;
  }
  return true;
}
const array = [2, 4, 8, 6, 10];
const even = element => element % 2 === 0;
console.log(every(array, even));
