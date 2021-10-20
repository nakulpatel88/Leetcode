// function solution(N, K) {
//     if (N === 0) {
//         return [""];
//     }
//     var result = [];
//     solution(N - 1, K - 1).forEach(function (p) {
//         "abc".split('').forEach(function (l) {
//             if (p.slice(-1) !== l) {
//                 result.push(p.concat(l));
//             }
//         });
//     });
//     return result.slice(0, K);
// }

// Finding INDEX of longest continuous increasing subsequence
// Not optimal
function solution(A) {
    if (A.length === 1) return 0;

    let max = 0;
    let max_index = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            console.log(i, j);

            let asc = isAscending(A.slice(i, j + 1));
            if (asc && (j - i + 1) > max) {
                max = Math.max(max, j - i + 1);
                max_index = i;
            }
        }
    }
    return max_index;
}


// Finding LENGTH of longest continuous increasing subsequence
// Optimal
// Time Complexity: O(N), where N is the length of nums.We perform one loop through nums.
// Space Complexity: O(1), the space used by anchor and ans.

var findLengthOfLCIS = function (nums) {
    if (nums.length === 0)
        return 0
    let result = 1
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1
        while (j < nums.length && nums[j] > nums[j - 1]) {
            j++
        }
        result = Math.max(result, j - i)
    }
    return result
};



/*
Find smallest file name for user root, ..... etc
def solution(S):
    S = S.splitlines()
    min_len = 100000000000000000000
    for line in S:
        owner = line[0:6].strip()
        perm = line[7:10]
        name = line[11:]
        ext = name.split('.')[-1]

        is_rea_only = 'r' in perm and 'w' not in perm
        is_binary = ext == 'pdf' or ext == 'xls' or ext == 'doc'

        if (owner == 'root' and is_rea_only and is_binary and min_len > len(name)):
            min_len = len(name)
    return min_len

*/