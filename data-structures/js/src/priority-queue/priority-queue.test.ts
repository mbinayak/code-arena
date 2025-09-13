import PriorityQueue from "./priority-queue.ts";

test("hello", () => {
  const pqueue = new PriorityQueue<number>();

  expect(pqueue.size).toBe(0);
});
