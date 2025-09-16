import PriorityQueue from "../../data-structures/js/src/priority-queue/priority-queue";

export default function shortestPath(
  graph: [number, number][][],
  startId: number,
  targetId: number
): number {
  // return spfa(graph, startId, targetId);
  return dijkstraAlgo(graph, startId, targetId);
}

function spfa(
  graph: [number, number][][],
  startId: number,
  targetId: number
): number {
  const distances = Array.from(
    { length: graph.length },
    () => Number.MAX_VALUE
  );
  const q: number[] = [startId]; // use deque here for better performance
  distances[startId] = 0;
  while (q.length > 0) {
    const nodeId = q.shift() as number;
    const nodeDistance = distances[nodeId] as number;
    const neighbours = graph[nodeId] as [number, number][];
    for (const [neighbourId, weight] of neighbours) {
      if ((distances[neighbourId] as number) <= nodeDistance + weight) {
        continue;
      }

      q.push(neighbourId);
      distances[neighbourId] = nodeDistance + weight;
    }
  }

  return distances[targetId] === undefined ||
    distances[targetId] === Number.MAX_VALUE
    ? -1
    : distances[targetId];
}

function dijkstraAlgo(
  graph: [number, number][][],
  startId: number,
  targetId: number
): number {
  interface Node {
    nodeId: number;
    distance: number;
  }
  const distances: number[] = [];
  const pqueue = new PriorityQueue<Node>({
    comparator: (nodeA: Node, nodeB: Node) => {
      return nodeA.distance < nodeB.distance;
    },
  });
  for (let i = 0; i < graph.length; i++) {
    if (i === startId) {
      distances[i] = 0;
      pqueue.add({
        nodeId: i,
        distance: 0,
      });
      continue;
    }

    distances[i] = Number.MAX_VALUE;
    pqueue.add({
      nodeId: i,
      distance: Number.MAX_VALUE,
    });
  }
  while (pqueue.size > 0) {
    const { nodeId, distance } = pqueue.remove() as Node;
    if (nodeId === targetId) break; // uniform cost search
    const neighbours = graph[nodeId] as [number, number][];
    for (const [neighbourId, nDistance] of neighbours) {
      const newDistance = distance + nDistance;
      if ((distances[neighbourId] as number) <= newDistance) {
        continue;
      }

      pqueue.add({
        nodeId: neighbourId,
        distance: newDistance,
      });
      distances[neighbourId] = newDistance;
    }
  }

  return distances[targetId] === undefined ||
    distances[targetId] === Number.MAX_VALUE
    ? -1
    : distances[targetId];
}
