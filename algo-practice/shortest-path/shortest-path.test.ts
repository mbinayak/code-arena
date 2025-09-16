import shortestPath from "./shortest-path";

describe("Test: Shortest Path for a Weighted Graph", () => {
  describe("Test generic functionality", () => {
    test("Test case 1", () => {
      const graph: [number, number][][] = [
        [
          [1, 1],
          [2, 1],
        ], // Node 0: connected to 1 (weight 1), 2 (weight 1)
        [
          [0, 1],
          [2, 1],
          [3, 1],
        ], // Node 1: connected to 0 (1), 2 (1), 3 (1)
        [
          [0, 1],
          [1, 1],
        ], // Node 2: connected to 0 (1), 1 (1)
        [[1, 1]], // Node 3: connected to 1 (1)
      ];
      const startId = 0;
      const targetId = 3;
      expect(shortestPath(graph, startId, targetId)).toBe(2);
    });

    test("Test case 2", () => {
      const graph: [number, number][][] = [
        [
          [1, 1],
          [2, 2],
        ],
        [
          [0, 1],
          [2, 0],
          [3, 3],
        ],
        [
          [0, 2],
          [1, 0],
          [3, 1],
        ],
        [
          [1, 3],
          [2, 1],
        ],
      ];
      const startId = 0;
      const targetId = 3;
      expect(shortestPath(graph, startId, targetId)).toBe(2);
    });

    test("Test case 3", () => {
      const graph: [number, number][][] = [
        [
          [1, 1],
          [2, 2],
        ],
        [
          [0, 1],
          [2, 0],
        ],
        [
          [0, 2],
          [1, 0],
        ],
        [],
      ];
      const startId = 0;
      const targetId = 3;
      expect(shortestPath(graph, startId, targetId)).toBe(-1);
    });

    test("Test case 4", () => {
      const graph: [number, number][][] = [
        [
          [1, 4],
          [7, 8],
        ],
        [
          [0, 4],
          [2, 8],
          [7, 11],
        ],
        [
          [1, 8],
          [3, 7],
          [5, 4],
          [8, 2],
        ],
        [
          [2, 7],
          [4, 9],
          [5, 14],
        ],
        [
          [3, 9],
          [5, 10],
        ],
        [
          [2, 4],
          [3, 14],
          [4, 10],
          [6, 2],
        ],
        [
          [5, 2],
          [7, 1],
          [8, 6],
        ],
        [
          [0, 8],
          [1, 11],
          [6, 1],
          [8, 7],
        ],
        [
          [2, 2],
          [6, 6],
          [7, 7],
        ],
      ];
      const startId = 0;
      const targetId = 2;
      expect(shortestPath(graph, startId, targetId)).toBe(12);
    });

    test("Test case 5", () => {
      const graph: [number, number][][] = [
        [
          [1, 4],
          [7, 8],
        ],
        [
          [0, 4],
          [2, 8],
          [7, 11],
        ],
        [
          [1, 8],
          [3, 7],
          [5, 4],
          [8, 2],
        ],
        [
          [2, 7],
          [4, 9],
          [5, 14],
        ],
        [
          [3, 9],
          [5, 10],
        ],
        [
          [2, 4],
          [3, 14],
          [4, 10],
          [6, 2],
        ],
        [
          [5, 2],
          [7, 1],
          [8, 6],
        ],
        [
          [0, 8],
          [1, 11],
          [6, 1],
          [8, 7],
        ],
        [
          [2, 2],
          [6, 6],
          [7, 7],
        ],
      ];
      const startId = 0;
      const targetId = 4;
      expect(shortestPath(graph, startId, targetId)).toBe(21);
    });

    test("Test case 6", () => {
      const graph: [number, number][][] = [
        [
          [1, 100],
          [2, 10],
          [3, 1],
        ],
        [
          [0, 100],
          [2, 50],
          [3, 30],
          [4, 9],
        ],
        [
          [0, 10],
          [1, 50],
          [3, 10],
          [4, 5],
        ],
        [
          [0, 1],
          [1, 30],
          [2, 10],
          [4, 1],
        ],
        [
          [1, 9],
          [2, 5],
          [3, 1],
        ],
      ];
      const startId = 0;
      const targetId = 4;
      expect(shortestPath(graph, startId, targetId)).toBe(2);
    });

    test("Test case 7", () => {
      const graph: [number, number][][] = [
        [
          [1, 100],
          [2, 10],
          [3, 1],
        ],
        [
          [0, 100],
          [2, 50],
          [3, 30],
          [4, 9],
        ],
        [
          [0, 10],
          [1, 50],
          [3, 10],
          [4, 5],
        ],
        [
          [0, 1],
          [1, 30],
          [2, 10],
          [4, 1],
        ],
        [
          [1, 9],
          [2, 5],
          [3, 1],
        ],
      ];
      const startId = 0;
      const targetId = 2;
      expect(shortestPath(graph, startId, targetId)).toBe(7);
    });

    test("Test case 8", () => {
      const graph: [number, number][][] = [
        [
          [1, 100],
          [2, 10],
          [3, 1],
        ],
        [
          [0, 100],
          [2, 50],
          [3, 30],
          [4, 9],
        ],
        [
          [0, 10],
          [1, 50],
          [3, 10],
          [4, 5],
        ],
        [
          [0, 1],
          [1, 30],
          [2, 10],
          [4, 1],
        ],
        [
          [1, 9],
          [2, 5],
          [3, 1],
        ],
      ];
      const startId = 3;
      const targetId = 2;
      expect(shortestPath(graph, startId, targetId)).toBe(6);
    });
  });
});
