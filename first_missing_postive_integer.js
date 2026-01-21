/*
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

function firstMissingPositive(nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        while(
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i]-1] !== nums[i]
        ) {
            const target = nums[i] - 1;
            [nums[target], nums[i]] = [nums[i], nums[target]];
        }
    }

    console.log(nums);

    for(let i = 0; i < n; i++) {
        if (nums[i] !== i+1) return i+1;
    }
    return n + 1;
}

let nums1 = [1,2,0];
console.log(firstMissingPositive(nums1)); // Output: 3

let nums2 = [3,4,-1,1];
console.log(firstMissingPositive(nums2)); // Output: 2

let nums3 = [7,8,9,11,12];
console.log(firstMissingPositive(nums3)); // Output: 1

// node first_missing_postive_integer.js