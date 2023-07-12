// Graph implementation using an adjacency list
class Graph {
  constructor() {
    this.vertices = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  // Add an edge between two vertices in the graph
  addEdge(vertex1, vertex2) {
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
      return "Vertex not found in the graph";
    }

    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  // Get the neighbors of a vertex in the graph
  getNeighbors(vertex) {
    if (!this.vertices.has(vertex)) {
      return "Vertex not found in the graph";
    }

    return this.vertices.get(vertex);
  }

  // Remove an edge between two vertices in the graph
  removeEdge(vertex1, vertex2) {
    if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
      return "Vertex not found in the graph";
    }

    this.vertices.set(
      vertex1,
      this.vertices.get(vertex1).filter((v) => v !== vertex2)
    );
    this.vertices.set(
      vertex2,
      this.vertices.get(vertex2).filter((v) => v !== vertex1)
    );
  }

  // Remove a vertex from the graph
  removeVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      return "Vertex not found in the graph";
    }

    const neighbors = this.vertices.get(vertex);
    for (const neighbor of neighbors) {
      this.removeEdge(vertex, neighbor);
    }

    this.vertices.delete(vertex);
  }
}

// Usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

console.log(graph.getNeighbors("B")); // [ 'A', 'C' ]

graph.removeEdge("C", "D");
console.log(graph.getNeighbors("C")); // [ 'B' ]

graph.removeVertex("A");
console.log(graph.getNeighbors("B")); // []
