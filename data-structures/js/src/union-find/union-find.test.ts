import UnionFind from "./union-find";

describe("Disjointed Set Union: Union Find", () => {
  describe(".find", () => {
    test("First inputs should return same", () => {
      const uf = new UnionFind<number>();
      expect(uf.find(1)).toBe(1);
      expect(uf.find(1500)).toBe(1500);
      expect(uf.find(7)).toBe(7);
      expect(uf.find(9)).toBe(9);
    });

    test("Find should return parent of the set", () => {
      const uf = new UnionFind<number>();
      uf.union(300, 500);
      expect(uf.find(500)).toBe(300);
      expect(uf.find(500)).toBe(uf.find(300));
    });
  });

  describe(".getRank", () => {
    test("Case 1: Initial rank should be zero", () => {
      const uf = new UnionFind<number>();
      expect(uf.getRank(1000)).toBe(0);
      expect(uf.getRank(3000)).toBe(0);
      expect(uf.getRank(10)).toBe(0);
      expect(uf.getRank(30)).toBe(0);
    });

    test("Case 2: Rank should increase after union", () => {
      const uf = new UnionFind<number>();
      expect(uf.getRank(1)).toBe(0);
      expect(uf.getRank(2)).toBe(0);
      uf.union(1, 2);
      expect(uf.getRank(1)).toBe(1);
      expect(uf.getRank(2)).toBe(0);
      uf.union(2, 3);
      expect(uf.getRank(1)).toBe(1);
      expect(uf.getRank(2)).toBe(0);
      expect(uf.getRank(3)).toBe(0);
      uf.union(3, 4);
      expect(uf.getRank(1)).toBe(1);
      expect(uf.getRank(2)).toBe(0);
      expect(uf.getRank(3)).toBe(0);
      expect(uf.getRank(4)).toBe(0);
      uf.union(4, 5);
      expect(uf.getRank(1)).toBe(1);
      expect(uf.getRank(2)).toBe(0);
      expect(uf.getRank(3)).toBe(0);
      expect(uf.getRank(4)).toBe(0);
      expect(uf.getRank(5)).toBe(0);
    });
  });

  describe(".union", () => {
    test("Case 1: union should be pointing to a single parent", () => {
      const uf = new UnionFind<number>();
      uf.union(1, 2);
      uf.union(2, 3);
      uf.union(3, 4);
      uf.union(4, 5);

      expect(uf.getRank(1)).toBe(1);
      expect(uf.find(1)).toBe(1);
      for (const i of [2, 3, 4, 5]) {
        expect(uf.find(i)).toBe(1);
        expect(uf.getRank(i)).toBe(0);
      }
    });

    test("Case 2: Check union of sets with same size and x === y", () => {
      const uf = new UnionFind<number>();
      // set 1
      uf.union(1, 2);
      uf.union(2, 3);
      uf.union(3, 4);
      uf.union(4, 5);
      expect(uf.getRank(1)).toBe(1);
      expect(uf.find(1)).toBe(1);
      for (const i of [2, 3, 4, 5, 5]) {
        expect(uf.find(i)).toBe(1);
        expect(uf.getRank(i)).toBe(0);
      }

      // set 2
      uf.union(11, 22);
      uf.union(22, 33);
      uf.union(33, 44);

      expect(uf.getRank(11)).toBe(1);
      expect(uf.find(11)).toBe(11);
      for (const i of [22, 33, 44]) {
        expect(uf.find(i)).toBe(11);
        expect(uf.getRank(i)).toBe(0);
      }

      uf.union(33, 4);
      expect(uf.getRank(1)).toBe(1); // remains the same
      expect(uf.getRank(11)).toBe(2); // increase by 1
      expect(uf.find(1)).toBe(11);
      expect(uf.find(11)).toBe(11); // now points to higer ranked parent.
    });

    test("Case 3: Check union of sets with different size and x > y", () => {
      const uf = new UnionFind<number>();
      // set 1
      uf.union(1, 2);
      uf.union(2, 3);

      // set 2
      uf.union(11, 22);
      uf.union(22, 33);
      uf.union(33, 44);

      expect(uf.getRank(1)).toBe(1); // remains the same
      expect(uf.getRank(11)).toBe(1); // increase by 1
      uf.union(33, 2); // same ranked parent union
      expect(uf.getRank(1)).toBe(1); // remains the same
      expect(uf.getRank(11)).toBe(2); // increase by 1
      expect(uf.find(1)).toBe(11);
      expect(uf.find(11)).toBe(11); // now points to higer ranked parent.

      // set 3
      uf.union(111, 222);
      uf.union(222, 333);
      uf.union(333, 444);
      uf.union(444, 555);

      expect(uf.getRank(11)).toBe(2); // increase by 1
      expect(uf.getRank(111)).toBe(1); // increase by 1
      uf.union(22, 555); // different ranked parent union

      expect(uf.getRank(1)).toBe(1); // remain the same
      expect(uf.getRank(11)).toBe(2); // remain the same
      expect(uf.getRank(111)).toBe(1); // remain the same

      expect(uf.find(1)).toBe(11);
      expect(uf.find(11)).toBe(11);
      expect(uf.find(111)).toBe(11);
      expect(uf.getRank(1)).toBe(1);
      expect(uf.getRank(11)).toBe(2);
      expect(uf.getRank(111)).toBe(1);
      for (const i of [2, 3, 22, 33, 44, 222, 333, 444, 555]) {
        expect(uf.find(i)).toBe(11);
        expect(uf.getRank(i)).toBe(0);
      }
    });
  });
});
