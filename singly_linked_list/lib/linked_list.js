// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    
    this.tail = newNode;
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (this.length == 0) return undefined;

    let current = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = current;
      while (current.next != null) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;
    return current;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currHead = this.head;
      this.head = newNode;
      this.head.next = currHead;      
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (this.length == 0) return undefined;

    const currHead = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = currHead.next;
    this.length--;
    return currHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    if (!this.head) return false;

    let curr = this.head;
    let count = 0;
    while (count < this.length) {
      if (curr.value == target) return true;
      curr = curr.next;
      count++;
    }
    
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (!this.head) return null;
    if (index > this.length) return null;
    let curr = this.head;
    let count = 0;
    while (count != index) {
      curr = curr.next;
      count++;
    }
    return curr;
  }

  // TODO: Implement the set method here
  set(index, val) {
    if (this.get(index)) {
      this.get(index).value = val;
      return true;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index >= this.length || index < 0) return false;
    if (index === 0) {
      this.addToHead(val);
      return true;
    }

    let newNode = new Node(val);
    let curr = this.get(index);
    let prev = this.get(index-1);
    prev.next = newNode;
    newNode.next = curr;

    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    let removed = this.get(index);
    this.get(index - 1).next = this.get(index + 1);
    this.length--;
    return removed;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;