/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
*/
// eslint-disable-next-line no-unused-vars
var firstUniqChar = function (s) {
  if (s.length === 0) return -1;
  for (var i = 0; i < s.length; i++) {
    var letter = s[i];
    if (s.indexOf(letter) === s.lastIndexOf(letter)) return i;
  }
  return -1;
};
