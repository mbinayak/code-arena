export default function isValidCourseSchedule(
  n: number,
  prerequisites: number[][]
): boolean {
  return isValidCourseScheduleDFS(n, prerequisites);
}

function isValidCourseScheduleDFS(
  n: number,
  prerequisites: number[][]
): boolean {
  const graph: number[][] = Array.from({ length: n }, () => []);
  for (const pr of prerequisites) {
    graph[pr[0] as number]?.push(pr[1] as number);
  }

  enum visitStatus {
    TO_VISIT,
    VISITING,
    VISITED,
  }

  const visitStates: visitStatus[] = Array.from(
    { length: n },
    () => visitStatus.TO_VISIT
  );
  function DFS(courseId: number): boolean {
    visitStates[courseId] = visitStatus.VISITING;
    for (const dependentCourseId of graph[courseId] as number[]) {
      switch (visitStates[dependentCourseId]) {
        case visitStatus.VISITED:
          continue;
        case visitStatus.TO_VISIT:
          return DFS(dependentCourseId);
        case visitStatus.VISITING:
          return false;
      }
    }

    visitStates[courseId] = visitStatus.VISITED;
    return true;
  }

  return DFS(0);
}

function isValidCourseScheduleTS(
  n: number,
  prerequisites: number[][]
): boolean {
  const graph: number[][] = Array.from({ length: n }, () => []);
  const inorderMap: number[] = Array.from({ length: n }, () => 0);
  for (const pr of prerequisites) {
    const preReqCourseId = pr[0] as number;
    const courseId = pr[1] as number;
    if (
      graph[preReqCourseId] === undefined ||
      inorderMap[courseId] === undefined
    ) {
      return false;
    }

    graph[preReqCourseId].push(courseId);
    inorderMap[courseId]++;
  }

  const queue: number[] = [];
  inorderMap.forEach((inOrderValue: number, id: number) => {
    if (inOrderValue === 0) {
      queue.push(id);
    }
  });

  const courseOrder: number[] = [];
  while (queue.length > 0) {
    const courseId = queue.shift() as number;
    courseOrder.push(courseId);
    for (const dependentCourseId of graph[courseId] as number[]) {
      if (inorderMap[dependentCourseId] === undefined) {
        return false;
      }

      inorderMap[dependentCourseId]--;
      if (inorderMap[dependentCourseId] === 0) {
        queue.push(dependentCourseId);
      }
    }
  }

  return courseOrder.length === graph.length;
}
