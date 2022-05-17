/**
 * ? Node to create
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ? Copied from linkedList_push_pop.js - O(1)
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  /**
   * ? Copied from linkedList_push_pop.js - O(N)
   * * Remove last element from the singlyLinkedList
   */

  pop() {
    if (!this.head) {
      console.log("List is Empty");
      return undefined;
    } else {
      let current = this.head;
      let newTail = current;

      while (current.next) {
        newTail = current;
        current = current.next;
      }

      this.tail = newTail;

      this.tail.next = null;

      this.length--;

      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      return current;
    }
  }

  /**
   * ! Copied from linkedList_shift.js - O(N)
   * ? Remove first element from the List - O(N)
   */
  shift() {
    const current = this.head;

    if (!current) {
      console.log("List is Empty");
      return undefined;
    }
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const current = this.head;
    const newNode = new Node(val);

    if (!current) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }
}

let list = new SinglyLinkedList();

list.unshift(10);
list.unshift(20);

console.log("list", list);
