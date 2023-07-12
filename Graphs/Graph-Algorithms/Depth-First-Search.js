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

  dfs(startVertex) {
    const visited = {}; // Keeps track of visited vertices
    const result = []; // Stores the traversal order

    // Helper function for DFS traversal
    const dfsTraversal = (vertex) => {
      visited[vertex] = true; // Mark the current vertex as visited
      result.push(vertex); // Add the current vertex to the result array

      // Iterate over the neighbors of the current vertex
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          // Check if the neighbor is not visited
          dfsTraversal(neighbor); // Recursively call the helper function for the unvisited neighbor
        }
      });
    };

    dfsTraversal(startVertex); // Start DFS traversal from the given start vertex

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

// Traverse the graph using DFS
const traversalResult = graph.dfs("A");
console.log(traversalResult);
