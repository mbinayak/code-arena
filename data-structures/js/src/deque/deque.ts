/**
 * Double Ended Queue (Deque)
 * A double ended queue (deque) is a generalized version of a queue that allows
 * elements to be added or removed from either the front (head) or back (tail).
 * This makes deques more versatile than standard queues, which only allow
 * insertion at the back and removal from the front.
 * Common operations on a deque include:
 * - Enqueue: Add an element to the back of the deque.
 * - Dequeue: Remove and return the element from the front of the deque.
 * - Push: Add an element to the back of the deque (similar to enqueue).
 * - Pop: Remove and return the element from the back of the deque.
 * - PushFront: Add an element to the front of the deque.
 * - Size: Get the number of elements in the deque.
 *
 * Deques can be implemented using various data structures, such as arrays or linked lists.
 * The choice of implementation can affect the performance of the various operations.
 *
 * This implementation uses a doubly linked list to allow efficient addition and removal
 * of elements from both ends of the deque.
 *
 * Time Complexity:
 * - Enqueue, Dequeue, Push, Pop, PushFront: O(1)
 * - Size: O(1)
 *
 * Space Complexity: O(n) where n is the number of elements in the deque.
 *
 * Usage as Stack:
 * - Push: Add an element to the back of the deque.
 * - Pop: Remove and return the element from the back of the deque.
 *
 * Usage as Queue:
 * - Enqueue: Add an element to the back of the deque.
 * - Dequeue: Remove and return the element from the front of the deque.
 *
 * @author Binayak Mishra(@mbinayak)
 */
export default class Deque<T> {
  // front aka head: front of the queue - usually elements are removed from this end
  private front: Node<T> | undefined;
  // back aka tail: back of the queue - usually elements are added from this end
  private back: Node<T> | undefined;
  private queueSize: number = 0;

  constructor(list?: T[]) {
    if (list?.length) {
      for (const ele of list) {
        this.addBack(ele);
      }
    }
  }

  get size(): number {
    return this.queueSize;
  }

  enqueue(ele: T) {
    this.addBack(ele);
  }

  dequeue(): T | null {
    if (this.queueSize == 0) {
      return null;
    }

    return this.removeFront();
  }

  // last in (back) first out(back)
  pop(): T | null {
    if (this.queueSize == 0) {
      return null;
    }

    return this.removeBack();
  }

  // same as enqueue, insert in the back
  push(ele: T) {
    return this.addBack(ele);
  }

  // push element to front of the queue
  pushFront(ele: T) {
    return this.addFront(ele);
  }

  // iterate from front to back
  *[Symbol.iterator]() {
    let current = this.front;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  private addFirst(ele: T) {
    if (this.queueSize > 0) {
      throw new Error(
        `INVALID OPERATION: addFirst - Queue already has size: ${this.queueSize}`
      );
    }
    const node = new Node<T>(ele);
    this.front = node;
    this.back = node;
    this.queueSize = 1;
  }

  private removeLast(): T {
    if (this.queueSize !== 1) {
      throw new Error(
        `INVALID OPERATION: removeLast - Queue has size: ${this.queueSize}`
      );
    }

    const val = this.front?.value as T;
    this.front = undefined;
    this.back = undefined;
    this.queueSize = 0;

    return val;
  }

  private addFront(ele: T) {
    if (this.queueSize == 0) {
      this.addFirst(ele);
      return;
    }

    const currentFront = this.front as Node<T>;
    const newFront = new Node<T>(ele, currentFront);
    currentFront.prev = newFront;
    this.front = newFront;
    this.queueSize++;
  }

  private removeFront(): T {
    if (this.queueSize === 0) {
      throw new Error(
        "INVALID OPERATION: removeFront - Queue has nothing to remove"
      );
    }

    if (this.queueSize === 1) {
      return this.removeLast();
    }

    const oldFront = this.front as Node<T>;
    const newFront = oldFront.next as Node<T>;
    newFront.prev = undefined;
    this.front = newFront;
    this.queueSize--;

    return oldFront.value;
  }

  private addBack(ele: T) {
    if (this.queueSize == 0) {
      this.addFirst(ele);
      return;
    }

    const oldBack = this.back as Node<T>;
    const newBack = new Node<T>(ele, undefined, oldBack);
    oldBack.next = newBack;
    this.back = newBack;
    this.queueSize++;
  }

  private removeBack(): T {
    if (this.queueSize === 0) {
      throw new Error(
        "INVALID OPERATION: removeBack - Queue has nothing to remove"
      );
    }

    if (this.queueSize === 1) {
      return this.removeLast();
    }

    const oldBack = this.back as Node<T>;
    const newBack = oldBack.prev as Node<T>;
    newBack.next = undefined;
    this.back = newBack;
    this.queueSize--;

    return oldBack.value;
  }
}

class Node<T> {
  value: T;
  next: Node<T> | undefined;
  prev: Node<T> | undefined;

  constructor(ele: T, next?: Node<T>, prev?: Node<T>) {
    this.value = ele;
    this.next = next;
    this.prev = prev;
  }
}
