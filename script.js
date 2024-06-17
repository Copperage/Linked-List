class Node {
	constructor(value) {
		this.value = value;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(value) {
		// if the list is empty, set the new node as the head of the list
		if (this.head == null) {
			this.head = new Node(value);
			this.tail = this.head;
		} else {
			// start from the head of the list
			let current = this.head;
			// traverse the list to find the last element
			while (current.nextNode != null) {
				// go down the list
				current = current.nextNode;
			}
			// attach the new node to the last element's nextNode
			current.nextNode = new Node(value);
			// update the tail of the list
			this.tail = current.nextNode;
		}
	}

	prepend(value) {
		// Check if the list is empty
		if (this.head == null) {
			// If the list is empty, we set the new node as the head of the list
			this.head = new Node(value);
		} else {
			// If the list is not empty, we create a new node and set it as the head of the list
			let current = this.head; // Store the current head of the list
			this.head = new Node(value); // Create a new node and set it as the head of the list
			this.head.nextNode = current; // Set the nextNode of the new node to the current head of the list
		}
	}

	// size return the number of elements in the list

	size() {
		if (this.head == null) {
			return 0;
		} else {
			let current = this.head;
			let count = 1;
			while (current.nextNode != null) {
				current = current.nextNode;
				count++;
			}
			return count;
		}
	}

	// head returns the first element in the list
	getHead() {
		if (this.head == null) {
			return null;
		} else {
			return this.head.value;
		}
	}

	// tail return the last element in the list
	getTail() {
		if (this.head == null) {
			return null;
		} else {
			return this.tail.value;
		}
	}

	// return node at index
	getIndex(index) {
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.nextNode;
		}

		return current.value;
	}

	// remove last element
	pop() {
		if (this.head != null) {
			let current = this.head;
			if (current.nextNode == null) {
				this.head = null;
			} else {
				while (current.nextNode.nextNode != null) {
					current = current.nextNode;
				}
				current.nextNode = null;
			}
		}
	}

	// contains returns true if the value is in the list
	contains(value) {
		if (this.head == null) {
			return false;
		} else {
			let current = this.head;
			while (current != null) {
				if (current.value == value) {
					return true;
				}
				current = current.nextNode;
			}
			return false;
		}
	}

	// find returns the index of the value in the list
	find(value) {
		if (this.head == null) {
			return -1;
		} else {
			let current = this.head;
			let index = 0;

			while (current != null) {
				if (current.value == value) {
					return index;
				}
				current = current.nextNode;
				index++;
			}
		}
	}

	// toString returns a string representation of the list
	toString() {
		let current = this.head;
		let string = '';

		// format: ( value ) -> ( value ) -> ( value ) -> null
		while (current != null) {
			string += `${current.value} -> `;
			current = current.nextNode;
		}

		string += 'null';
		return string;
	}
}

/*
    Head of the list -> First Element -> Go down the elements in the list -> Read Null as last element
*/

// testing

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(10);

console.log(list);
console.log(list.size());
console.log('head:', list.getHead());
console.log('tail:', list.getTail());
console.log('index:', list.getIndex(3));
console.log('contains:', list.contains(5));
console.log('find:', list.find(1));
console.log('toString:', list.toString());
