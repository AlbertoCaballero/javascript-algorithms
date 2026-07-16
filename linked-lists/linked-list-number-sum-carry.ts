/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const holder = new ListNode(0);
    let tail = holder;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const v1 = l1 !== null ? l1.val : 0;
        const v2 = l2 !== null ? l2.val : 0;

        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);

        tail.next = new ListNode(sum % 10);
        tail = tail.next;

        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }

    return holder.next;
}

