/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let x_string = "" + x;
    let isPal = true;

    let li = 0;
    let ri = x_string.length - 1;
    while (li < ri) {
        if (x_string[li] !== x_string[ri]) {
            isPal = false;
            break;
        }
        li = li + 1;
        ri = ri - 1;
    }

    return isPal;
};

let answer = isPalindrome(121);
console.log(answer);