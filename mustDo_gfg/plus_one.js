/*
Given a non-negative number represented as a list of digits, add 1 to the number (increment the number represented by the digits). The digits are stored such that the most significant digit is first element of array.

Example 1:
Input: 
N = 3
arr[] = {1, 2, 4}
Output: 
1 2 5
Explanation:
124+1 = 125, and so the Output

Example 2:
Input: 
N = 3
arr[] = {9,9,9}
Output: 
1 0 0 0
Explanation:
999+1 = 1000, and so the output
*/

function plusOne(digits) {
    let n = digits.length;

    let carry = 1;
    for (let i = n - 1; i >=0; i-- ) {
        const result = carry + digits[i];
        carry = Math.floor(result / 10);
        digits[i] = result % 10;
    }

    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;

}

function plusOne1(digits) {
    let index = digits.length - 1;

    while(index >= 0 && digits[index] === 9 ) {
        digits[index--] = 0;
    }

    if (index < 0) {
        digits.unshift(1);
    } else {
        digits[index]++;
    }
    return digits;
}

let digits1 = [1, 2, 4];
console.log(plusOne(digits1)); // Output: [1, 2, 5]
// console.log(plusOne1(digits1));

let digits2 = [9, 9, 9];
console.log(plusOne(digits2)); // Output: [1, 0, 0, 0]
// console.log(plusOne1(digits2));
// node plus_one.js