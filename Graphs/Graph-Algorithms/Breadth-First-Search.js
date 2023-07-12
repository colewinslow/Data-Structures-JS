// Define the Graph class
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  bfs(startVertex) {
    const visited = {}; // Keeps track of visited vertices
    const queue = [startVertex]; // Initialize a queue with the starting vertex
    const result = []; // Stores the traversal order

    visited[startVertex] = true; // Mark the starting vertex as visited

    while (queue.length) {
      const currentVertex = queue.shift(); // Dequeue the first vertex from the queue
      result.push(currentVertex); // Add the current vertex to the result array

      // Iterate over the neighbors of the current vertex
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          // Check if the neighbor is not visited
          visited[neighbor] = true; // Mark the neighbor as visited
          queue.push(neighbor); // Enqueue the neighbor for further exploration
        }
      });
    }

    return result; // Return the traversal order
  }
}

// Create a graph
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

// Traverse the graph using BFS
const traversalResult = graph.bfs("A");
console.log(traversalResult);
