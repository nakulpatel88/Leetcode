/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    let queue = [];
    let currentLevel = 0;
    let currentStartIndex = 0;
    let lastNodeIndex = 0;
    let maxWidth = -1;
    if (root) {
        root.level = currentLevel;
        root.index = 0;
        queue.push(root);
    }

    while (queue.length > 0) {
        let node = queue.shift();
        expand(queue, node.left, node.level + 1, node.index * 2);
        expand(queue, node.right, node.level + 1, (node.index * 2) + 1);

        if (node.level === currentLevel) {
            lastNodeIndex = node.index;
        }
        else {
            maxWidth = Math.max(maxWidth, lastNodeIndex - currentStartIndex + 1);
            currentStartIndex = node.index;
            lastNodeIndex = node.index;
            currentLevel = node.level;
        }
    }

    maxWidth = Math.max(maxWidth, lastNodeIndex - currentStartIndex + 1);
    return maxWidth;
};

function expand(queue, node, level, index) {
    if (node) {
        node.level = level;
        node.index = index;
        queue.push(node);
    }
}