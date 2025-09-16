# Shortest Path for a weighted graph

Given a graph find the shortest path between a starting point and targest point

## 1. Approach 1: Shortest Path Fast Algorithm(SPFA)

- This approach is simple we use bfs to scan through the graph starting form the starting point. To keep track of the visited node we use distance instead of visited state only. Intially the distance is set to a very big number for all node except the start node which obviously will have distance of 0 to itself. And then we check the neighbours and update their least possible distance from the starting point if and when lower distance is found during scan.
- This approach is implemented in `function spfa(graph: [number, number][][], startId: number, targetId: number): number` method.
- This approach is simple but inefficient since we are not taking advantage of the fact that each is edge is weighted. But it is still good for small graphs.

## Approach 2: Dijkstra's Algorithm

- Simillar to the [first approach](#1-approach-1-shortest-path-fast-algorithmspfa) we use bfs and update the distances as we scan along the graph starting from startId but with only one difference. We use priority queue instead of the generic one. And when we find a smaller distance we just update the distance which is taken as priority in a min priority queue, the smaller the distance, higher the priority.
- Second advantage of this approach is that we can end the search early if we are only interested in reaching the target. The priority queue guarentees that we have the shortest distance from the starting point. This greatly reduces the execution time and make its possible to work with big, infinite graphs. This method is called **Uniform Cost Search**.
- This approach is implemented in `function dijkstraAlgo(graph: [number, number][][], startId: number, targetId: number): number` method.
