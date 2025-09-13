type Comparator<T> = (ele1: T, ele2: T) => boolean;

export default class PriorityQueue<T> {
  heap: T[] = [];
  comparator: Comparator<T>;

  constructor(maxHeap?: boolean, comparator?: Comparator<T>) {
    if (comparator) {
      this.comparator = comparator;
      return;
    }

    this.comparator = maxHeap ? this.maxComparator : this.minComparator;
  }

  add(ele: T) {
    // push to pqueue
    this.heap.push(ele);
    this.bubbleUp();
  }

  remove(): T | undefined {
    if (this.size === 0) {
      return;
    }

    if (this.size === 1) {
      return this.heap.pop();
    }

    const top = this.top;
    const lastEle = this.heap.pop();
    this.heap[0] = lastEle as T;
    this.bubbleDown();
    return top;
  }

  get top(): T | undefined {
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }

  private bubbleUp() {
    // todo
  }

  private bubbleDown() {
    // todo
  }

  private minComparator(parentVal: T, childVal: T): boolean {
    return parentVal <= childVal;
  }

  private maxComparator(parentVal: T, childVal: T): boolean {
    return parentVal >= childVal;
  }

  private getParentId(id: number): number | undefined {
    if (id === 0) {
      return;
    }

    return Math.floor((id - 1) / 2);
  }

  private getChildrenIds(id: number): {
    left: number | undefined;
    right: number | undefined;
  } {
    const left = id * 2 + 1;
    const right = left + 1;

    return {
      left: this.size > left ? left : undefined,
      right: this.size > right ? right : undefined,
    };
  }
}
