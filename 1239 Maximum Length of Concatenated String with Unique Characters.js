/*
Given an array of strings arr.String s is a concatenation of a sub - sequence of arr which have unique characters.

Return the maximum possible length of s.

Example 1:

Input: arr = ["un", "iq", "ue"]
Output: 4
Explanation: All possible concatenations are "", "un", "iq", "ue", "uniq" and "ique".
Maximum length is 4.
*/

var maxLength = function (arr) {
    let result = [-1]
    solver(arr, result);
    return result[0];
};

var solver = function (arr, result, index = 0, selection = "") {
    if (index == arr.length) {
        if (uniqueCharCount(selection) > result[0]) {
            result[0] = selection.length;
        }
        return
    }

    solver(arr, result, index + 1, selection);
    solver(arr, result, index + 1, selection + arr[index]);
}

var uniqueCharCount = function (input) {
    const count = new Set();

    for (const s of input) {
        if (!count.has(s)) count.add(s);
        else return -1;
    }

    return count.size;
}