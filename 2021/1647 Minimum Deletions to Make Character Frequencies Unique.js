//1647. Minimum Deletions to Make Character Frequencies Unique

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
    const aCode = "a".charCodeAt();
    const counts = new Array(26).fill(0);
    const set = new Set();

    for (let i = 0; i < s.length; ++i) {
        counts[s.charCodeAt(i) - aCode]++;
    }

    let deleteCount = 0;

    for (let i = 0; i < 26; ++i) {
        if (counts[i] === 0) continue;

        while (set.has(counts[i])) {
            ++deleteCount;
            --counts[i];
        }

        if (counts[i] === 0) continue;

        set.add(counts[i]);
    }

    return deleteCount;
};