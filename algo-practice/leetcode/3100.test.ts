import maxBottleDrunk from "./3100";

describe("3100.Water Bottles II", () => {
  test("Test case 1", () => {
    expect(maxBottleDrunk(13, 6)).toBe(15);
  });

  test("Test case 2", () => {
    expect(maxBottleDrunk(10, 3)).toBe(13);
  });
});
