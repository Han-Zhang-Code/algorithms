/* eslint-disable no-console */
function some(array, predicate) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) count++;
  }
  if (count >= 1) return true;
  else return false;
}
const array = [1, 3, 5];
const even = element => element % 2 === 0;
console.log(some(array, even));
