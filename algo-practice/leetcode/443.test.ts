import compress from "./443";

describe("String compression", () => {
  test("Test case 1", () => {
    const inputArr = ["a"];
    const compressedArr = ["a"];
    const compressedStrLength = compress(inputArr);
    expect(compressedStrLength).toBe(compressedArr.length);
    expect(inputArr.slice(0, compressedStrLength)).toEqual(["a"]);
  });

  test("Test case 2", () => {
    const inputArr = ["a", "a", "b", "b", "c", "c", "c"];
    const compressedArr = ["a", "2", "b", "2", "c", "3"];
    const compressedStrLength = compress(inputArr);
    expect(compressedStrLength).toBe(compressedArr.length);
    expect(inputArr.slice(0, compressedStrLength)).toEqual(compressedArr);
  });

  test("Test case 2", () => {
    const inputArr = [
      "a",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
    ];
    const compressedArr = ["a", "b", "1", "2"];
    const compressedStrLength = compress(inputArr);
    expect(compressedStrLength).toBe(compressedArr.length);
    expect(inputArr.slice(0, compressedStrLength)).toEqual(compressedArr);
  });
});
