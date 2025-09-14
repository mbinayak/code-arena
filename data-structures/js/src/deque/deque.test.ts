import Deque from "./deque";

describe("Double Ended Queue", () => {
  describe("Test public methods", () => {
    let deque: Deque<number>;
    beforeEach(() => {
      deque = new Deque<number>();
    });

    test("enqueue, dequeue", () => {
      expect(deque.size).toBe(0);
      deque.enqueue(1);
      expect(deque.size).toBe(1);
      deque.enqueue(2);
      expect(deque.size).toBe(2);
      expect(deque.dequeue()).toBe(1);
      expect(deque.size).toBe(1);
      expect(deque.dequeue()).toBe(2);
      expect(deque.size).toBe(0);
      expect(deque.dequeue()).toBeNull();
    });

    test("push, pop", () => {
      expect(deque.size).toBe(0);
      deque.push(1);
      expect(deque.size).toBe(1);
      deque.push(2);
      expect(deque.size).toBe(2);
      expect(deque.pop()).toBe(2);
      expect(deque.size).toBe(1);
      expect(deque.pop()).toBe(1);
      expect(deque.size).toBe(0);
      expect(deque.pop()).toBeNull();
    });

    test("pushFront, dequeue", () => {
      expect(deque.size).toBe(0);
      deque.pushFront(1);
      expect(deque.size).toBe(1);
      deque.pushFront(2);
      expect(deque.size).toBe(2);
      expect(deque.dequeue()).toBe(2);
      expect(deque.size).toBe(1);
      expect(deque.dequeue()).toBe(1);
      expect(deque.size).toBe(0);
      expect(deque.dequeue()).toBeNull();
    });

    test("pushFront, pop", () => {
      expect(deque.size).toBe(0);
      deque.pushFront(1);
      expect(deque.size).toBe(1);
      deque.pushFront(2);
      expect(deque.size).toBe(2);
      expect(deque.pop()).toBe(1);
      expect(deque.size).toBe(1);
      expect(deque.pop()).toBe(2);
      expect(deque.size).toBe(0);
      expect(deque.pop()).toBeNull();
    });

    test("push, pushFront, dequeue, pop", () => {
      expect(deque.size).toBe(0);
      deque.push(1);
      expect(deque.size).toBe(1);
      deque.pushFront(2);
      expect(deque.size).toBe(2);
      deque.push(3);
      expect(deque.size).toBe(3);
      deque.pushFront(4);
      expect(deque.size).toBe(4);
      expect(deque.dequeue()).toBe(4);
      expect(deque.size).toBe(3);
      expect(deque.pop()).toBe(3);
      expect(deque.size).toBe(2);
      expect(deque.dequeue()).toBe(2);
      expect(deque.size).toBe(1);
      expect(deque.pop()).toBe(1);
      expect(deque.size).toBe(0);
      expect(deque.pop()).toBeNull();
      expect(deque.dequeue()).toBeNull();
    });
  });

  describe("Test initialization with list", () => {
    test("initialize with empty list", () => {
      const deque = new Deque<number>([]);
      expect(deque.size).toBe(0);
      expect(deque.dequeue()).toBeNull();
      expect(deque.pop()).toBeNull();
    });

    test("initialize with non-empty list", () => {
      const deque = new Deque<number>([1, 2, 3]);
      expect(deque.size).toBe(3);
      expect(deque.dequeue()).toBe(1);
      expect(deque.pop()).toBe(3);
      expect(deque.size).toBe(1);
      expect(deque.dequeue()).toBe(2);
      expect(deque.size).toBe(0);
    });

    test("initialize with non-empty list of strings", () => {
      const deque = new Deque<string>(["a", "b", "c"]);
      expect(deque.size).toBe(3);
      expect(deque.dequeue()).toBe("a");
      expect(deque.pop()).toBe("c");
      expect(deque.size).toBe(1);
      expect(deque.dequeue()).toBe("b");
      expect(deque.size).toBe(0);
    });

    test("initialize with non-empty list of objects", () => {
      const deque = new Deque<{ id: number; name: string }>([
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
      ]);
      expect(deque.size).toBe(3);
      expect(deque.dequeue()).toEqual({ id: 1, name: "a" });
      expect(deque.pop()).toEqual({ id: 3, name: "c" });
      expect(deque.size).toBe(1);
      expect(deque.dequeue()).toEqual({ id: 2, name: "b" });
      expect(deque.size).toBe(0);
    });
  });
  describe("Test iteration", () => {
    test("iterate over empty deque", () => {
      const deque = new Deque<number>();
      const result = Array.from(deque);
      expect(result).toEqual([]);
    });

    test("iterate over non-empty deque", () => {
      const deque = new Deque<number>([1, 2, 3]);
      const result = Array.from(deque);
      expect(result).toEqual([1, 2, 3]);
    });

    test("iterate after several operations", () => {
      const deque = new Deque<number>();
      deque.push(1);
      deque.push(2);
      deque.pushFront(0);
      deque.pop();
      deque.enqueue(3);
      const result = Array.from(deque);
      expect(result).toEqual([0, 1, 3]);
    });

    test("iterate after clearing the deque", () => {
      const deque = new Deque<number>([1, 2, 3]);
      deque.pop();
      deque.pop();
      deque.pop();
      const result = Array.from(deque);
      expect(result).toEqual([]);
    });

    test("for-of loop iteration", () => {
      const deque = new Deque<number>([1, 2, 3]);
      const result = [];
      for (const item of deque) {
        result.push(item);
      }
      expect(result).toEqual([1, 2, 3]);
    });
  });
});
