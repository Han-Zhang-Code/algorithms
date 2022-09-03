/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/
// eslint-disable-next-line no-unused-vars
var intersect = function (nums1, nums2) {
  const sol = [];
  for (let i = 0; i < nums2.length; i++) {
    const index = nums1.indexOf(nums2[i]);
    if (index >= 0) {
      sol.push(nums2[i]);
      nums1.splice(index, 1);
    }
  }
  return sol.sort();
};
