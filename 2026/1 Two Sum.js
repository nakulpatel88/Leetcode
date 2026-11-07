/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i];
        if (obj[remaining] !== undefined) {
            return [obj[remaining], i];
        }
        obj[nums[i]] = i;
    }
};

let answer = twoSum([2, 7, 11, 15], 9);
console.log(answer);

//7: 0