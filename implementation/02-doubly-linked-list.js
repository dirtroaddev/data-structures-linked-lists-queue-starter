// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);
    
    if(this.head == null) {
       this.head = newNode;
       this.tail = newNode;
       this.length += 1;
    } else {
    let temp = this.head
    while(temp.next !== null) {
      temp = temp.next;
    }
    
    this.head.prev = null;
    temp.next = newNode;
    newNode.prev = temp;
    this.tail = newNode;
    this.length += 1;
        // Write your hypothesis on the time complexity of this method here
    }

}

    removeFromHead() {
        // Remove node at head
        if(this.head == null) return undefined;
        let current = this.head;
        // Write your hypothesis on the time complexity of this method here
        if(this.length == 1) 
        {
            this.length -= 1;
            this.head = null;
            this.tail = null;
            return current.value;
            
        } else {
        

        this.head = this.head.next;
        
        this.length -= 1;
        this.head.prev = null;
        return current.value;

        }
        
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
        let current = this.tail;
        if(this.head == null) return undefined;
        if(this.length == 1) {
            this.tail = null;
            this.head = null;
            this.length -= 1;
            return current.value;
        } else {

            this.length -= 1;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return current.value;
        }

        






    }

    peekAtHead() {
        // Return value of head node
        if(this.head == undefined) return undefined;

        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(this.tail == undefined) return undefined;
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
