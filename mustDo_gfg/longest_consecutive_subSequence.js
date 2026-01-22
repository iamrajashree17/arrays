/*
Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

Examples:

Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
Output: 6
Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.
Input: arr[] = [1, 9, 3, 10, 4, 20, 2]
Output: 4
Explanation: 1, 2, 3, 4 is the longest consecutive subsequence.
Input: arr[] = [15, 13, 12, 14, 11, 10, 9]
Output: 7
Explanation: The longest consecutive subsequence is 9, 10, 11, 12, 13, 14, 15, which has a length of 7.
*/


function longestConsecutiveSubsequence(arr) {
    let numSet = new Set();

    for(let val of arr) {
        numSet.add(val);
    }

    let res = 0;
    for(let val of arr) {
        if(numSet.has(val)  && !numSet.has(val-1)) {
            let curr = val, cnt = 0;

            while(numSet.has(curr)) {
                numSet.delete(curr);
                curr++;
                cnt++;
            }
            res = Math.max(res, cnt);
        }
    }
    return res;

}

let arr1 = [2, 6, 1, 9, 4, 5, 3];
console.log(longestConsecutiveSubsequence(arr1)); // Output: 6

let arr2 = [1, 9, 3, 10, 4, 20, 2];
console.log(longestConsecutiveSubsequence(arr2)); // Output: 4

let arr3 = [15, 13, 12, 14, 11, 10, 9];
console.log(longestConsecutiveSubsequence(arr3)); // Output: 7

// node longest_consecutive_subSequence.js