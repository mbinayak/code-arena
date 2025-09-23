import kClosestPoints from "./k-closest-points";

describe("K Closest Points", () => {
  test("Test case 1", () => {
    expect(
      kClosestPoints(
        [
          [1, 1],
          [2, 2],
          [3, 3],
        ],
        1
      )
    ).toEqual([[1, 1]]);
  });
  test("Test case 2", () => {
    expect(
      kClosestPoints(
        [
          [1, 1],
          [2, 2],
          [3, 3],
        ],
        2
      )
    ).toEqual([
      [1, 1],
      [2, 2],
    ]);
  });
  test("Test case 3", () => {
    expect(
      kClosestPoints(
        [
          [1, 1],
          [2, 2],
          [3, 3],
        ],
        3
      )
    ).toEqual([
      [1, 1],
      [2, 2],
      [3, 3],
    ]);
  });
  test("Test case 4", () => {
    expect(
      kClosestPoints(
        [
          [1, 3],
          [-2, 2],
        ],
        1
      )
    ).toEqual([[-2, 2]]);
  });
  test("Test case 5", () => {
    expect(
      kClosestPoints(
        [
          [4, 4],
          [2, 4],
          [8, 1],
          [3, -5],
        ],
        2
      )
    ).toEqual([
      [2, 4],
      [4, 4],
    ]);
  });
});
