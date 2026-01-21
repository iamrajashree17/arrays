/*
Given an integer array nums, return the number of subarrays filled with 0.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.

Example 2:
Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

Example 3:
Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.
*/

function zeroFilledSubarray(nums) {
    let zeroCount = 0;
    let result = 0;

    for (let num of nums) {
        if (num === 0) {
            zeroCount++;
        } else {
            result += zeroCount * (zeroCount + 1) /2;
            zeroCount = 0;
        }
    }
    result += zeroCount * (zeroCount + 1) /2;
    return result;
}

let nums1 = [1,3,0,0,2,0,0,4];
console.log(zeroFilledSubarray(nums1)); // Output: 6

let nums2 = [0,0,0,2,0,0];
console.log(zeroFilledSubarray(nums2)); // Output: 9

let nums3 = [2,10,2019];
console.log(zeroFilledSubarray(nums3)); // Output: 0

// node zero_filled_array.js