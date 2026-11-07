/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let ret = [];

    while (arr.length > 0) {
        ret.push(arr.splice(0, size));
    }

    return ret;
};

let answer = chunk([1, 9, 6, 3, 2], 3);
console.log(answer);