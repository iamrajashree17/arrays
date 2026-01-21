/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) 
such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.
*/

function increasingTriplet(nums) {
    let first = Infinity;
    let second = Infinity;
    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }
    return false;
}

let nums1 = [1,2,3,4,5];
console.log(increasingTriplet(nums1)); // Output: true

let nums2 = [5,4,3,2,1];
console.log(increasingTriplet(nums2)); // Output: false

let nums3 = [2,1,5,0,4,6];
console.log(increasingTriplet(nums3)); // Output: true

// node increasing_triplet_sequence.js