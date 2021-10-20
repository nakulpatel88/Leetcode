/**
 * @param {string} s
 * @return {number}
 */

/*
Using a cursor to determine how many a's to delete on right of cursor and how many b's to delete on left of cursor.
This will be O(n)
*/
var minimumDeletions = function (s) {
    let a_left = 0;
    let b_left = 0;

    let a_right = 0;
    let b_right = 0;
    for (let c of s) {
        c === 'a' ? a_right++ : b_right++;
    }

    let best = Math.min(s.length, a_right, b_right);

    for (let current of s) {
        if (current === 'a') {
            a_left++;
            a_right--;
        } else {
            b_left++;
            b_right--;
        }
        best = Math.min(best, b_left + a_right);
    }
    return best;
};