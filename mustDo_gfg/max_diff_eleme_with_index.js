/*
Given an array arr[] of positive integers. Find maximum value of |arr[i] – arr[j]| + |i – j|, (0 <= i, j <= n – 1)
Examples:
Input: arr[] = [1, 2, 3, 1]
Output: 4
Explanation: Choosing i=0 and j=2, will result in |1-3|+|0-2| = 4, which is the maximum possible value.
Input: arr[] = [1, 1, 1]
Output: 2
Explanation: Choosing i=0 and j=2, will result in |1-1|+|0-2| = 2, which is the maximum possible value.
*/

function maxDiffElemWithIndex(arr) {
    let max1 = -Infinity;
    let max2 = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for(let i = 0; i < arr.length; i++) {
        max1 = Math.max(max1, arr[i] + i);
        max2 = Math.max(max2, arr[i] - i);

        min1 = Math.min(min1, arr[i] + i);
        min2 = Math.min(min2, arr[i] - i);
    }

    return Math.max(max1-min1, max2-min2)
}

let arr1 = [1, 2, 3, 1];
console.log(maxDiffElemWithIndex(arr1)); // Output: 4

let arr2 = [1, 1, 1];
console.log(maxDiffElemWithIndex(arr2)); // Output: 2

// node max_diff_eleme_with_index.js