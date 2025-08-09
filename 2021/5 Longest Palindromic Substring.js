/*
Idea comes from optimizing recursive solution by remembering previous result.Let's say we have a 2D array dp. In each cell, it indicates whether range(i, j) can become a palindrome or not, where i, j denotes start and end index of the given string s. We can build upon base cases and expand from there:

base case with one character - dp[i][i] = true when i === j
base case with two characters - dp[i][i + 1] = true when s[i] === s[i + 1]
expand case with three or more characters - dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j]
Here's an example of dp with "babad" after two base cases
┌─────────┬───────┬───────┬───────┬───────┬───────┬───────┐
│ (index) │   0   │   1   │   2   │   3   │   4   │   5   │
├─────────┼───────┼───────┼───────┼───────┼───────┼───────┤
│    0    │ true  │ false │ false │ false │ false │ false │
│    1    │ false │ true  │ false │ false │ false │ false │
│    2    │ false │ false │ true  │ false │ false │ false │
│    3    │ false │ false │ false │ true  │ false │ false │
│    4    │ false │ false │ false │ false │ true  │ false │
│    5    │ false │ false │ false │ false │ false │ false │
└─────────┴───────┴───────┴───────┴───────┴───────┴───────┘
*/

// 2D DP
var longestPalindrome = function (s) {

    if (s.length <= 1) return s;

    // construct a 2D array
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));

    let lps = '';

    // base case for one character
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }

    // base case for two characters
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) dp[i][i + 1] = true;
        if (dp[i][i + 1]) lps = s.substring(i, i + 2);
    }

    // expand to three or more characters
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            if (dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }

    return lps;
}