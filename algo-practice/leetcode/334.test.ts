import increasingTriplet from "./334";

describe("Incresing Triplet", () => {
  test("Test case 1", () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
  });

  test("Test case 2", () => {
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
  });

  test("Test case 3", () => {
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
  });

  test("Test case 3", () => {
    expect(increasingTriplet([2, 1, 5, 0, 7, 4, 6])).toBe(true);
  });

  test("Test case 3", () => {
    expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toBe(true);
  });
});
