/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let l_pointer = 0;
    let r_pointer = 0;

    while (r_pointer < nums.length) {
        let curr_num = nums[r_pointer];
        if (curr_num !== 0 && l_pointer !== r_pointer) {
            nums[l_pointer] = curr_num;
            nums[r_pointer] = 0;
            l_pointer++;
        }
        r_pointer++;
    }
}

let input = [4, 0];
moveZeroes(input);
console.log(input);