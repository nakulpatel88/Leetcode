// We go through the array in one loop
// Runtime is O(n), n = length of array A
// Space used to keep track of position in the array, return value, etc. is constant.
// Space complexity O(1) 

function solution(A) {
    let A_size = A.length;
    if (A_size === 1) return 0;

    let max_length = -1;
    let max_index = -1;

    for (let i = 0; i < A_size - 1; i++) {
        let j = i + 1;
        while (j < A_size && A[j] > A[j - 1]) {
            j++;
        }

        if ((j - i) > max_length) {
            max_length = j - i;
            max_index = i;
        }

        // jump i pointer to current j
        // there will be no point in checking items between current i and j
        // as they would all end at current j with less length
        i = j - 1;
    }

    return max_index
}


//0452010