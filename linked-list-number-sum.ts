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
  let n1 = BigInt(listNodeToArray(l1).reverse().join(''));
  let n2 = BigInt(listNodeToArray(l2).reverse().join(''));
  let n = (n1 + n2).toLocaleString('fullwide', { useGrouping: false }).split('').map(e => +e);

  let prev: ListNode;
  n.forEach(e => {
    prev = new ListNode(e, prev);
  })

  return prev;
};

function listNodeToArray(ln: ListNode): number[] | null {
  let next: ListNode | null = ln;
  let numlist: number[] = [];

  while (next != null) {
    numlist.push(next.val);
    next = next.next;
  }

  return numlist;
}

