type Comparator<T> = (ele1: T, ele2: T) => boolean;

export default class PriorityQueue<T> {
  private heap: T[];
  private readonly heapComplianceComparator: Comparator<T>;

  constructor(params?: {
    list?: T[];
    maxHeap?: boolean;
    comparator?: Comparator<T>;
  }) {
    this.heap = params?.list?.length ? params.list : [];
    if (params?.comparator) {
      this.heapComplianceComparator = params.comparator;
    } else {
      this.heapComplianceComparator = params?.maxHeap
        ? this.maxComparator
        : this.minComparator;
    }

    this.heapify();
  }

  add(ele: T) {
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

  private bubbleUp(startId?: number) {
    let eleId = startId ?? this.size - 1;
    while (eleId > 0) {
      const parentId = this.getParentId(eleId) as number;
      const eleVal = this.heap[eleId] as T,
        parentVal = this.heap[parentId] as T;
      if (this.heapComplianceComparator(parentVal, eleVal)) {
        break;
      }

      this.heap[eleId] = parentVal;
      this.heap[parentId] = eleVal;
      eleId = parentId;
    }
  }

  private bubbleDown() {
    let eleId = 0; // start from root node, then bubble down
    const lastId = this.size - 1;
    while (eleId < lastId) {
      const { leftChildId, rightChildId } = this.getChildrenIds(eleId);

      if (leftChildId === undefined) {
        // if no left child exists that means its a leaf node, no further down possible. Heap property satisfied.
        break;
      }
      const eleVal = this.heap[eleId] as T;
      const leftChildVal = this.heap[leftChildId] as T;

      let swapId: number | undefined;
      if (this.heapComplianceComparator(leftChildVal, eleVal)) {
        swapId = leftChildId;
      }

      if (rightChildId) {
        const rightChildVal = this.heap[rightChildId] as T;
        if (
          this.heapComplianceComparator(rightChildVal, eleVal) &&
          this.heapComplianceComparator(rightChildVal, leftChildVal)
        ) {
          swapId = rightChildId;
        }
      }

      if (!swapId) {
        // no swap required means, heap property satisfied. Break
        break;
      }

      const swapVal = this.heap[swapId] as T;
      this.heap[swapId] = eleVal;
      this.heap[eleId] = swapVal;
      eleId = swapId;
    }
  }

  // heapify method take in an initial array and converts it into a heap, and sort it in place
  private heapify() {
    for (let i = this.size - 1; i > 0; i--) {
      this.bubbleUp(i);
    }
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
    leftChildId: number | undefined;
    rightChildId: number | undefined;
  } {
    const left = id * 2 + 1;
    const right = left + 1;

    return {
      leftChildId: this.size > left ? left : undefined,
      rightChildId: this.size > right ? right : undefined,
    };
  }
}
