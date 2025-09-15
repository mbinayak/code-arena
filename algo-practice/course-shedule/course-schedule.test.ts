import isValidCourseSchedule from "./course-schedule";

describe("Is Valid Course Schedule: isValidCourseSchedule", () => {
  test("Test case 1", () => {
    const prerequisites = [[0, 1]];
    const n = 2;
    expect(isValidCourseSchedule(n, prerequisites)).toBe(true);
  });

  test("Test case 1", () => {
    const prerequisites = [
      [0, 1],
      [1, 0],
    ];
    const n = 2;
    expect(isValidCourseSchedule(n, prerequisites)).toBe(false);
  });

  test("Test case 1", () => {
    const prerequisites = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 1],
    ];
    const n = 4;
    expect(isValidCourseSchedule(n, prerequisites)).toBe(false);
  });
});
