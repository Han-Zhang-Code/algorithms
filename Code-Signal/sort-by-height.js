/* eslint-disable no-console */
function solution(a) {
  var sorted = a.filter(po => po > 0).sort((a, b) => a - b);

  return a.map(p => {
    if (p !== -1) {
      return sorted.shift();
    }
    return -1;
  });
}
var a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(solution(a));
