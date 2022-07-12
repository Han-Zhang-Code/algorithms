/* eslint-disable no-console */
function every(array, predicate) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) count++;
  }
  if (count === array.length) return true;
  else return false;
}
const array = [2, 4, 5, 6];
const even = element => element % 2 === 0;
console.log(every(array, even));
