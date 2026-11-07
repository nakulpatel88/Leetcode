/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const stack = [];
    const res = new Array(temperatures.length).fill(0);

    stack.push([temperatures[0], 0]);

    for (let i = 1; i < temperatures.length; i++) {
        let currTemp = temperatures[i];

        while (stack.length > 0 && currTemp > stack[stack.length - 1][0]) {
            let last_item = stack.pop();
            let last_index = last_item[1];
            res[last_index] = i - last_index;
        }

        stack.push([currTemp, i]);
    }

    return res;
};

let answer = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
console.log(answer);