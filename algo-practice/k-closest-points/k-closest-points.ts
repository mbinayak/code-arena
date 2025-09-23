import PriorityQueue from "../../data-structures/js/src/priority-queue/priority-queue";

type xyPoint = number[];
export default function kClosestPoints(
  points: xyPoint[],
  k: number
): xyPoint[] {
  const originPoint = [0, 0];
  const q = new PriorityQueue<xyPoint>({
    list: points,
    comparator: (p1: xyPoint, p2: xyPoint): boolean => {
      return distance(originPoint, p1) < distance(originPoint, p2);
    },
  });
  const result: xyPoint[] = [];
  for (let i = 0; i < k; i++) {
    result.push(q.remove() as xyPoint);
  }

  return result;
}

function distance([x1, y1]: xyPoint, [x2, y2]: xyPoint): number {
  return Math.sqrt(
    ((x1 as number) - (x2 as number)) ** 2 +
      ((y1 as number) - (y2 as number)) ** 2
  );
}
