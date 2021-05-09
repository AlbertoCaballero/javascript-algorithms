class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// Should return the sum of two integers stores by character in reverse order in a linked list
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return null;
}

// Print the entirety of the list values in order
function printList(list: ListNode) {
    let current: ListNode = list;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

// reverse the linked list
function reverse(list: ListNode): ListNode {
    let prev = null;
    let current = list;
    let next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    current = prev;
    return current
}

// Define a simple linked list
let linkedList: ListNode = new ListNode(5, new ListNode(10, new ListNode(15, null)));
printList(linkedList);
