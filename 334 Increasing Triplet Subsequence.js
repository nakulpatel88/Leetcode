var increasingTriplet = function (nums) {
    if (nums.length < 3) return false;

    let i = Number.MAX_VALUE;
    let j = Number.MAX_VALUE;
    for (let n of nums) {
        if (n <= i) {
            i = n;
        } else if (n <= j) {
            j = n;
        } else { // we have number that makes a sequence i < j < k < MAX_VALUE
            return true;
        }
    }
    return false;
};