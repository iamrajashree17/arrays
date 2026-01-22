/*
You are given a circular array arr[] of integers, find the maximum possible sum of a non-empty subarray. In a circular array, the subarray can start at the end and wrap around to the beginning. Return the maximum non-empty subarray sum, considering both non-wrapping and wrapping cases.

Examples:

Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
Output: 22
Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
Output: 23
Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
Input: arr[] = [5, -2, 3, 4]
Output: 12
Explanation: The circular subarray [3, 4, 5] gives the maximum sum of 12.
*/

function maxCircularSubarraySum(arr) {
    let totalSum = 0;
    let maxSum = arr[0];
    let minSum = arr[0];
    let currMax = 0;
    let currMin = 0;

    for(let i = 0; i < arr.length; i++) {
        currMax = Math.max(currMax + arr[i], arr[i]);
        maxSum = Math.max(maxSum, currMax);

        currMin = Math.min(currMin + arr[i], arr[i]);
        minSum = Math.min(minSum, currMin);
        
        totalSum += arr[i];
    }

    let normalSum = maxSum;
    let circularSum = totalSum - minSum;

    if (totalSum === minSum) return normalSum;
    return Math.max(normalSum, circularSum);

}

let arr1 = [8, -8, 9, -9, 10, -11, 12];
console.log(maxCircularSubarraySum(arr1)); // Output: 22

let arr2 = [10, -3, -4, 7, 6, 5, -4, -1];
console.log(maxCircularSubarraySum(arr2)); // Output: 23

let arr3 = [5, -2, 3, 4];
console.log(maxCircularSubarraySum(arr3)); // Output: 12

// node max_circualr_subarray_sum.js