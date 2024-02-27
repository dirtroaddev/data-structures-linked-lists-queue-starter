// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let newList = new SinglyLinkedNode(val);
        newList.next = this.head;
        this.head = newList
        this.length += 1;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length += 1;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length += 1;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        let hold = null;
        let current = this.head;
        if(this.head == null) return;
        // Write your hypothesis on the time complexity of this method here


        hold = current;
        this.head = this.head.next;
        this.length -=1;
        return hold;
    }

    removeFromTail() {
        // Remove node at tail
        let hold = null;
        if(this.head == null) return;

        if(this.head.next == null){

         this.head = null;
         this.length -= 1;
         return;
        }
        let current = this.head;
        while(current.next.next != null) {
            current = current.next;
            
        }
        hold = current.next;
        current.next = null;
        this.length -= 1;
        return hold;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(this.head == null) return undefined;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let current = this.head;

    while (current) {
      console.log(`${current.value}`);
      current = current.next;
    }

   
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
