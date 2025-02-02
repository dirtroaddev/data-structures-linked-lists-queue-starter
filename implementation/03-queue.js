const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return this.length;
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this.length;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        let hold = this.head;
        
        if(this.head == null)  return null;
        if(this.length == 1) {
            this.tail = null;
            this.head = null;
            return hold.value;
        } else {

            this.head = this.head.next;
            this.length -= 1;
            return hold.value;
        }
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
