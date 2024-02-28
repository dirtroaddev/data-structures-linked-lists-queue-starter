// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        if(this.head == null) return 0;
        let temp = this.head;
        let count = 0;
         while(temp) {
            count += 1;
            temp = temp.next;
         }

         return count;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        if(this.head == null) return 0;
        let temp = this.head;
        let sum = 0;
         while(temp) {
            sum += temp.value;
            temp = temp.next;
         }

         return sum;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        if(this.head == null) return 0;
        let temp = this.head;
        let count = 0;
        let sum = 0;
         while(temp) {
            
             sum += temp.value;
             count += 1;
            temp = temp.next;
         }

         return sum / count;
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if(this.head == null) return 0;
        let temp = this.head;
        let count = 0;
        
         while(temp) {
            
             if(count === n) {
                return temp;
             }
             count += 1;
            temp = temp.next;
         }

         return sum / count;
        // Write your hypothesis on the time complexity of this method here
        
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            let sec = this.head;
            if(sec.next == null) return sec;
            let count = 0;
            let midNum = 0;
            
            
             while(sec) {
                
                 
                 count += 1;
                sec = sec.next;
             }
             let mid;
             
             if(count % 2 === 0) {
                mid = Math.floor(count / 2) - 1;
             } else {
                mid = Math.floor(count / 2);
             }
             
             
             let secNext = this.head;
             while(secNext) {
                
                 if(mid == midNum) {    
                    
                    return secNext;
                 }
                midNum += 1;
                secNext = secNext.next;
            }
             
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        let reversedList = new SinglyLinkedList();
        let current = this.head;
        while (current != null) {
            let newNode = new SinglyLinkedNode(current.value); // Create a new node with the current value
            newNode.next = reversedList.head; // Point new node's next to the current head of the reversed list
            reversedList.head = newNode; // Update the head of the reversed list to be the new node
            current = current.next; // Move to the next node in the original list
        }
        return reversedList;
    }
    

    reverseInPlace() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current != null) {
            next = current.next; // Save next node
            current.next = prev; // Reverse current node's pointer
            prev = current; // Move prev to current node
            current = next; // Move to next node
        }
        this.head = prev; // Update head to new first element
    }
    
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            let sec = this.head;
            if(sec.next == null) return sec;
            let count = 0;
            let midNum = 0;
            
            
             while(sec) {
                
                 
                 count += 1;
                sec = sec.next;
             }
             let mid;
             
             if(count % 2 === 0) {
                mid = Math.floor(count / 2) - 1;
             } else {
                mid = Math.floor(count / 2);
             }
             
             
             let secNext = this.head;
             while(secNext) {
                
                 if(mid == midNum) {    
                    
                    return secNext;
                 }
                midNum += 1;
                secNext = secNext.next;
            }
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let reversedList = new SinglyLinkedList();
        let current = this.head;
        while (current != null) {
            let newNode = new SinglyLinkedNode(current.value); // Create a new node with the current value
            newNode.next = reversedList.head; // Point new node's next to the current head of the reversed list
            reversedList.head = newNode; // Update the head of the reversed list to be the new node
            current = current.next; // Move to the next node in the original list
        }
        return reversedList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let current = this.head;
        let next = null;
        while (current != null) {
            next = current.next; // Save next node
            current.next = prev; // Reverse current node's pointer
            prev = current; // Move prev to current node
            current = next; // Move to next node
        }
        this.head = prev; // Update head to new first element
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
