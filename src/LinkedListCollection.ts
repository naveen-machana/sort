import { Sortable } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedListCollection implements Sortable {
  private head: Node | null = null;
  private tail: Node = new Node(0);

  add(data: number): void {
    const tempNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = tempNode;
    } else {
      this.tail.next = tempNode;
      this.tail = tempNode;
    }
  }

  get length(): number {
    let count = 0;
    let temp = this.head;
    while (temp !== null) {
      count++;
      temp = temp.next;
    }

    return count;
  }

  at(index: number): Node {
    let count = 0;
    let node = this.head;

    while (node !== null && count < index) {
      count++;
      node = node.next;
    }
    if (node === null) {
      throw new Error('Invalid index');
    }
    return node;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    return (
      leftNode !== null && rightNode !== null && leftNode.data > rightNode.data
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);

    let temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    let temp = this.head;
    let resString = '';

    while (temp !== null) {
      resString += temp.data + ' ';
      temp = temp.next;
    }

    console.log(resString);
  }
}
