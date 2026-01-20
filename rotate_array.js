/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/

function rotateArray(nums, k) {
    
    if (k === 0) return nums;
    if (k === n) return nums;
    const n = nums.length;
    k = k % n;
    
    function reverse(start, end) {
        while(start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--
        }
    }
    // Reverse entire array;
    reverse(0, n-1);
    // Reverse k elements;
    reverse(0, k-1);
    // Reverse n - k element;
    reverse(k, n-1);
    return nums;
}

// let nums = [1,2,3,4,5,6,7], k = 3 // [5,6,7,1,2,3,4]
let nums = [-1,-100,3,99], k = 2 // [3,99,-1,-100]

console.log(rotateArray(nums, k));
 

// node rotate_array.js