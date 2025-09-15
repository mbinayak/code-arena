import PriorityQueue from "../../data-structures/js/src/priority-queue/priority-queue";

function getGraphAndInorderMap(words: string[]): {
  graph: Map<string, string[]>;
  inorderMap: Map<string, number>;
} {
  const inorderMap = new Map<string, number>();
  const graph = new Map<string, string[]>();
  for (const w of words) {
    for (const l of w) {
      if (!inorderMap.has(l)) {
        inorderMap.set(l, 0);
      }
      if (!graph.has(l)) {
        graph.set(l, []);
      }
    }
  }

  for (
    let firstWordId = 0, secondWordId = 1;
    secondWordId < words.length;
    firstWordId++, secondWordId++
  ) {
    const firstWord = words[firstWordId] as string;
    const secondWord = words[secondWordId] as string;
    const l = Math.min(firstWord.length, secondWord.length);
    for (let i = 0; i < l; i++) {
      const l1 = firstWord.charAt(i);
      const l2 = secondWord.charAt(i) as string;
      if (l1 !== l2) {
        (graph.get(l1) as string[]).push(l2);
        inorderMap.set(l2, (inorderMap.get(l2) as number) + 1);
        break;
      }
    }
  }

  return { inorderMap, graph };
}

export default function alienOrder(words: string[]): string {
  const { graph, inorderMap } = getGraphAndInorderMap(words);
  const pqueue = new PriorityQueue<string>();
  for (const k of inorderMap.keys()) {
    if (inorderMap.has(k) && inorderMap.get(k) === 0) {
      pqueue.add(k);
    }
  }

  const orderedLetters = [];
  while (pqueue.size > 0) {
    const key = pqueue.remove() as string;
    const nextLetters = graph.get(key);
    orderedLetters.push(key);
    if (nextLetters?.length) {
      for (const l of nextLetters) {
        inorderMap.set(l, (inorderMap.get(l) as number) - 1);
        if (inorderMap.get(l) === 0) {
          pqueue.add(l);
        }
      }
    }
  }

  if (orderedLetters.length !== graph.size) {
    return "";
  }

  return orderedLetters.join("");
}
