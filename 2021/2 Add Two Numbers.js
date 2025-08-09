/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l3 = new ListNode();
    let l3_curr_node = l3;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let l1val = l1 === null ? 0 : l1.val;
        let l2val = l2 === null ? 0 : l2.val;
        let sum = carry + l1val + l2val;
        let last_dig = sum % 10;
        carry = sum > 9 ? 1 : 0;
        l3_curr_node.val = last_dig;
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;

        if (l1 !== null || l2 !== null) {
            l3_curr_node.next = new ListNode();
            l3_curr_node = l3_curr_node.next;
        }
    }
    if (carry > 0) {
        l3_curr_node.next = new ListNode(carry);
    }

    return l3;
};