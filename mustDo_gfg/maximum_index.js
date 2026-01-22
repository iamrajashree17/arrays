/*
Given an array arr of positive integers. You have to return the maximum of j - i such that arr[i] < arr[j] and i < j.

Examples:

Input: arr[] = [1, 10]
Output: 1
Explanation: arr[0] < arr[1] so (j-i) is 1-0 = 1.
Input: arr[] = [5, 4, 3]
Output: 0
Explanation: There is no pair that satisfies the given condition.
Input: arr[] = [34, 8, 10, 3, 2, 80, 30, 33, 1]
Output: 6
Explanation: In the given array arr[1] < arr[7] satisfying the required condition(arr[i] < arr[j]) thus giving the maximum difference of j - i which is 6(7-1).
*/

function maximumIndex(arr) {
    let n = arr.length;

    let res = 0;
    let st = [];

    for (let i = 0; i< n; i++) {
        if (st.length === 0 || (arr[st[st.length-1]] > arr[i])) st.push(i);
    }

    for (let j = n -1; j >=0; j--) {
        while (st.length >0 && (arr[st[st.length-1]] <= arr[j])) {
            res = Math.max(res, j - st[st.length-1]);
            st.pop();
        }
    }

    return res;
}

let arr1 = [1, 10];
console.log(maximumIndex(arr1)); // Output: 1

let arr2 = [5, 4, 3];
console.log(maximumIndex(arr2)); // Output: 0

let arr3 = [34, 8, 10, 3, 2, 80, 30, 33, 1];
console.log(maximumIndex(arr3)); // Output: 6

// node maximum_index.js