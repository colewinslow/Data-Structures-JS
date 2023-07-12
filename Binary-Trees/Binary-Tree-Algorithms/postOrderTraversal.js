// Binary Tree Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a value into the binary tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Post-order Traversal of the binary tree
  postOrderTraversal() {
    this.postOrderTraversalNode(this.root);
  }

  postOrderTraversalNode(node) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left);
      this.postOrderTraversalNode(node.right);
      console.log(node.value);
    }
  }
}

// Create a binary tree
const tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);

// Perform post-order traversal of the binary tree
console.log("Post-order Traversal:");
tree.postOrderTraversal();
