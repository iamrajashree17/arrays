/*
Given an array, arr of integers, and another number target, find three integers in the array such that their sum is closest to the target. Return the sum of the three integers.
Note: If there are multiple solutions, return the maximum one.
Examples :
Input: arr[] = [-7, 9, 8, 3, 1, 1], target = 2
Output: 2
Explanation: There is only one triplet present in the array where elements are -7,8,1 whose sum is 2.
Input: arr[] = [5, 2, 7, 5], target = 13
Output: 14
Explanation: There is one triplet with sum 12 and other with sum 14 in the array. Triplet elements are 5, 2, 5 and 2, 7, 5 respectively. Since abs(13-12) ==abs(13-14) maximum triplet sum will be preferred i.e 14.
*/

function closet3Sum(arr, target) {
    arr.sort((a, b) => a - b);
    let res = 0;
    let n = arr.length; 
    let minDiff = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < n - 2; i++) {
        let l = i + 1; let r = n - 1;
        while (l < r) {
            let currSum = arr[i] + arr[l] + arr[r];

            if (Math.abs(currSum - target) < minDiff) {
                minDiff = Math.abs(currSum - target);
                res = currSum;
            } else if (Math.abs(currSum - target) === minDiff) {
                res = Math.max(res, currSum);
            }

            if (currSum > target) {
                r--;
            } else {
                l++;
            }
        }
    }
    return res;

}

let arr1 = [-7, 9, 8, 3, 1, 1];
let target1 = 2;
console.log(closet3Sum(arr1, target1)); // Output: 2

let arr2 = [5, 2, 7, 5];
let target2 = 13;
console.log(closet3Sum(arr2, target2)); // Output: 14

// node closet_3_sum.js