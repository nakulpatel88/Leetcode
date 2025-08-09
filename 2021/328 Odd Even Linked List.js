/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
The first node is considered odd, and the second node is even, and so on.
Note that the relative order inside both the even and odd groups should remain as it was in the input.
*/

function oddEvenList(head) {
    if (!head) return head;

    var odd = head;
    var even = head.next;
    while (odd.next && odd.next.next) {
        var tmp = odd.next;
        odd.next = odd.next.next;
        odd = odd.next;
        tmp.next = odd.next;
    }
    odd.next = even;
    return head;
}