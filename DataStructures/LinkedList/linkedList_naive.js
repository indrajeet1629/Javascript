class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list = new Node("Hi");

list.next = new Node("Hello");
list.next.next = new Node("How");
list.next.next.next = new Node("How");

console.log("list", list);
