export default class UnionFind<T> {
  private elements: Map<T, T>;
  private ranks: Map<T, number>;

  constructor() {
    this.ranks = new Map<T, number>();
    this.elements = new Map<T, T>();
  }

  getRank(x: T): number {
    if (!this.ranks.has(x)) {
      this.ranks.set(x, 0);
      return 0;
    }

    return this.ranks.get(x) as number;
  }

  find(x: T): T {
    let y = this.elements.has(x) ? (this.elements.get(x) as T) : x;
    if (x !== y) {
      y = this.find(y) as T;

      // tree compression, previously y was parent to x but now y and x both have common parents
      this.elements.set(x, y);
    }

    return y;
  }

  union(x: T, y: T) {
    const px = this.find(x);
    const py = this.find(y);
    const rankX = this.getRank(px),
      rankY = this.getRank(py);
    if (rankX < rankY) {
      this.elements.set(px, py); // higher rank becomes parent
      return;
    }

    this.elements.set(py, px);
    if (rankX === rankY) {
      this.ranks.set(px, (this.ranks.get(px) as number) + 1);
    }
  }
}
