/*
Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.

Examples :

Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
Output: 6
Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.
Input: a[] = [1, 4, 8, 10, 12], b[] = [5, 7, 11, 15, 17], k = 6
Output: 10
Explanation: Combined sorted array is [1, 4, 5, 7, 8, 10, 11, 12, 15, 17]. The 6th element of this array is 10.
*/

function kthElement(arr1, arr2, k) {
    let i = 0; let j = 0;
    let kthElement = 0;

    for (let d = 0; d < k; d++) {
        if (i < arr1.length) {
            if (j < arr2.length && arr1[i] > arr2[j]) {
                kthElement = arr2[j];
                j++;
            } else {
                kthElement = arr1[i];
                i++;
            }
        } else if (j < arr2.length) {
            kthElement = arr2[j];
            j++;
        }
    }
    return kthElement;
}

let arr1 = [2, 3, 6, 7, 9];
let arr2 = [1, 4, 8, 10];
let k = 5;
console.log(kthElement(arr1, arr2, k)); // Output: 6

arr1 = [1, 4, 8, 10, 12];
arr2 = [5, 7, 11, 15, 17];
k = 6;
console.log(kthElement(arr1, arr2, k)); // Output: 10

// node kth_element.js

