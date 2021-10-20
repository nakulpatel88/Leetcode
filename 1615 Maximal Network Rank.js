/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    let connected = [];
    for (let i = 0; i < n; i++) {
        connected.push([]);
        for (let j = 0; j < n; j++) {
            connected[i][j] = 0;
        }
    }
    for (let r of roads) {
        connected[r[0]][r[1]] = 1;
        connected[r[1]][r[0]] = 1;
    }

    let connections = [];
    for (let i = 0; i < n; i++) {
        connections.push(connected[i].reduce((a, b) => a + b, 0));
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
        // Important, we are only counting after i+1 on every iteration... If 1-3 is counted then there is no need to count 3-1 again.
        // Also this avoids issue of counting same node as most connected 3-3, if 3  has most roads.
        for (let j = i + 1; j < n; j++) {
            max = Math.max(max, connections[i] + connections[j] - connected[i][j])
        }
    }

    return max;
};