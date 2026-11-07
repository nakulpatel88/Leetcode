/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let pMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])

    let stack = [];

    for (let c of s) {
        if (pMap.has(c)) {
            const last = stack[stack.length - 1];
            if (pMap.get(c) === last) {
                stack.pop();
            }
            else {
                return false;
            }
        }
        else {
            stack.push(c);
        }
    }

    return stack.length === 0;
};

let answer = isValid("()[]{}")
console.log(answer);