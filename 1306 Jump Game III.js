/*
Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.

Example 1:

Input: arr = [4,2,3,0,3,1,2], start = 5
Output: true
Explanation:
All possible ways to reach at index 3 with value 0 are:
index 5 -> index 4 -> index 1 -> index 3
index 5 -> index 6 -> index 4 -> index 1 -> index 3
*/

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start, visited = {}) {
    if (arr[start] === undefined || visited[start]) return false;
    if (arr[start] === 0) return true;

    visited[start] = true;

    return canReach(arr, start - arr[start], visited) || canReach(arr, start + arr[start], visited);
};

//OR

var canReach = function (arr, start) {
    const n = arr.length;

    return dfs(start);

    function dfs(index) {
        if (arr[index] === 0) return true;
        if (!withinBound(index) || arr[index] === -1) return false;

        const val = arr[index];
        arr[index] = -1;

        return dfs(index + val) || dfs(index - val);
    }


    function withinBound(index) {
        return index >= 0 && index < n;
    }
};