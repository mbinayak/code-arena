import PriorityQueue from "./priority-queue.ts";

describe("Priority Queue", () => {
  describe("Min Priority Queue", () => {
    const pqueue = new PriorityQueue<number>();
    describe("Base Functionality", () => {
      test("Empty Operations", () => {
        expect(pqueue.size).toBe(0);
        expect(pqueue.top).toBeUndefined();
        expect(pqueue.remove()).toBeUndefined();
        expect(pqueue.top).toBeUndefined();
      });

      test("Basic Functionality", () => {
        const arr: number[] = [4, 7, 9, 2, 5, 1];
        const arrSortedAsc: number[] = [...arr].sort(
          (a: number, b: number) => a - b
        );
        const size = arr.length;

        for (let i = 0; i < size; i++) {
          pqueue.add(arr[i] as number);
          expect(pqueue.size).toBe(i + 1);
        }

        expect(pqueue.size).toBe(size);
        expect(pqueue.top).toBe(arrSortedAsc[0]);
        for (let i = 0; i < size; i++) {
          expect(pqueue.remove()).toBe(arrSortedAsc[i]);
        }
      });
    });
  });

  describe("Max Priority Queue", () => {
    const pqueue = new PriorityQueue<number>({ maxHeap: true });
    describe("Base Functionality", () => {
      test("Empty Operations", () => {
        expect(pqueue.size).toBe(0);
        expect(pqueue.top).toBeUndefined();
        expect(pqueue.remove()).toBeUndefined();
        expect(pqueue.top).toBeUndefined();
      });

      test("Basic Functionality", () => {
        const arr: number[] = [4, 7, 9, 2, 5, 1];
        const arrSortedDesc: number[] = [...arr].sort(
          (a: number, b: number) => b - a
        );
        const size = arr.length;

        for (let i = 0; i < size; i++) {
          pqueue.add(arr[i] as number);
          expect(pqueue.size).toBe(i + 1);
        }

        expect(pqueue.size).toBe(size);
        expect(pqueue.top).toBe(arrSortedDesc[0]);
        for (let i = 0; i < size; i++) {
          expect(pqueue.remove()).toBe(arrSortedDesc[i]);
        }
      });
    });
  });

  describe("Custom Comparator Priority Queue", () => {
    interface Person {
      name: string;
      age: number;
    }
    const people: Person[] = [
      { name: "n1", age: 32 },
      { name: "n2", age: 52 },
      { name: "n3", age: 12 },
      { name: "n4", age: 22 },
      { name: "n5", age: 82 },
      { name: "n6", age: 55 },
      { name: "n7", age: 23 },
      { name: "n8", age: 6 },
    ];

    const peopleSortedByAgeDesc: Person[] = [
      { name: "n5", age: 82 },
      { name: "n6", age: 55 },
      { name: "n2", age: 52 },
      { name: "n1", age: 32 },
      { name: "n7", age: 23 },
      { name: "n4", age: 22 },
      { name: "n3", age: 12 },
      { name: "n8", age: 6 },
    ];
    const peopleSize = people.length;

    const pqueue = new PriorityQueue<Person>({
      comparator: (a: Person, b: Person) => {
        return a.age > b.age; // so we expect the order to be older first.
      },
    });

    test("Empty Operations", () => {
      expect(pqueue.size).toBe(0);
      expect(pqueue.top).toBeUndefined();
      expect(pqueue.remove()).toBeUndefined();
      expect(pqueue.top).toBeUndefined();
    });

    test("Basic Functionality", () => {
      for (let i = 0; i < peopleSize; i++) {
        pqueue.add(people[i] as Person);
        expect(pqueue.size).toBe(i + 1);
      }

      expect(pqueue.size).toBe(peopleSize);
      expect(pqueue.top?.name).toBe(peopleSortedByAgeDesc[0]?.name);
      expect(pqueue.top?.age).toBe(peopleSortedByAgeDesc[0]?.age);
      for (let i = 0; i < peopleSize; i++) {
        const oldestPersonInQueue = pqueue.remove();
        expect(oldestPersonInQueue?.name).toBe(peopleSortedByAgeDesc[i]?.name);
        expect(oldestPersonInQueue?.age).toBe(peopleSortedByAgeDesc[i]?.age);
      }
    });
  });
});
