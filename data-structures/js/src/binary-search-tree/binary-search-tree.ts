/**
 * WIP: Binary Search Tree Implementation
 * TOOD: Complete the implementation
 */

class BinarySearchTreeNode<T> {
  private value: T;
  private leftChild: BinarySearchTreeNode<T> | undefined;
  private rightChild: BinarySearchTreeNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySeachTree<T> {
  private root: BinarySearchTreeNode<T> | undefined;

  constructor(value: T) {
    this.root = new BinarySearchTreeNode<T>(value);
  }

  inOrderRead(node?: BinarySearchTreeNode<T> = this.root) {}
}

export default BinarySeachTree;
