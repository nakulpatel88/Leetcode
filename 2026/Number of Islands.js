function numIslands(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    let islands = 0;

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] !== "1") continue;

            islands++;
            grid[row][col] = "0";

            // dfs and mark connected land 0
            let stack = [[row, col]];
            while (stack.length > 0) {
                const [r, c] = stack.pop();

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr < 0 || nr >= numRows ||
                        nc < 0 || nc >= numCols
                    ) {
                        continue;
                    }

                    if (grid[nr][nc] !== "1") continue;

                    grid[nr][nc] = "0";
                    stack.push([nr, nc]);
                }
            }
        }
    }

    return islands;
}


function numIslandsBFS(grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    let islands = 0;

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] !== "1") continue;

            islands++;

            // bfs to explore the island
            let queue = [[row, col]];
            grid[row][col] = "0";

            while (queue.length > 0) {
                let [r, c] = queue.shift();

                for (let [dr, dc] of directions) {
                    let nr = r + dr;
                    let nc = c + dc;

                    if (nr < 0 || nr >= numRows || nc < 0 || nc >= numCols) {
                        continue;
                    }

                    if (grid[nr][nc] === "0") continue;

                    grid[nr][nc] = "0";
                    queue.push([nr, nc]);
                }
            }
        }
    }

    return islands;
}


let answer = numIslandsBFS([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]);
console.log(answer);