const lengthOfLongestSubstring = function (s) {
    let longestStr = '';
    let currentStr = '';

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        let index = currentStr.indexOf(letter);

        if (index > -1) {
            if (currentStr.length > longestStr.length) longestStr = currentStr;
            currentStr = currentStr.slice(index + 1) + letter;
        }
        else {
            currentStr += letter;
        }
    }
    if (currentStr.length > longestStr.length) longestStr = currentStr;
    return longestStr.length;
}