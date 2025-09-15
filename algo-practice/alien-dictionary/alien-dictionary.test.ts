import alienOrder from "./alien-dictionary";

describe("alienOrder", () => {
  test("Test case 1", () => {
    const words = ["wrt", "wrf", "er", "ett", "rftt"];
    const expectedResult = "wertf";
    expect(alienOrder(words)).toBe(expectedResult);
  });

  test("Test case 2", () => {
    const words = ["z", "x"];
    const expectedResult = "zx";
    expect(alienOrder(words)).toBe(expectedResult);
  });

  test("Test case 3", () => {
    const words = [
      "she",
      "sell",
      "seashell",
      "seashore",
      "seahorse",
      "on",
      "a",
    ];
    const expectedResult = "lnrsheoa";
    expect(alienOrder(words)).toBe(expectedResult);
  });

  test("Test case 4", () => {
    const words = ["stdlib", "stl", "scanf", "sscanf", "printf"];
    const expectedResult = "abdfilnrtcsp";
    expect(alienOrder(words)).toBe(expectedResult);
  });

  test("Test case 5", () => {
    const words = [
      "da",
      "a",
      "na",
      "fa",
      "fei",
      "jia",
      "ha",
      "hai",
      "hang",
      "hua",
      "ta",
      "sha",
      "shi",
      "si",
      "ba",
    ];
    const expectedResult = "";
    expect(alienOrder(words)).toBe(expectedResult);
  });

  test("Test case 6", () => {
    const words = [
      "neat",
      "net",
      "nest",
      "ante",
      "one",
      "oil",
      "innit",
      "ian",
      "isotope",
      "rat",
      "reer",
      "rest",
    ];
    const expectedResult = "lnaeoiprts";
    expect(alienOrder(words)).toBe(expectedResult);
  });
});
