const prettyPrint = (node, prefix = '', isLeft = true, output = []) => {
  if (node === null) return;
  
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false, output);
  }

  output.push(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true, output);
  }

  return output;
};

class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array, 0, array.length - 1);
  }

  buildTree(array, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new Node(array[mid]);
    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);
    return root;
  }

  render() {
    const lines = prettyPrint(this.root);
    const container = document.querySelector('.tree-display');
    container.innerHTML = `<pre>${lines.join('\n')}</pre>`;
  }
}


const btnsend = document.querySelector('.sendbtn');
const input = document.querySelector('.inputnumbers');


btnsend.addEventListener('click', () => {
  let numbers = input.value.trim();
  if (!numbers) return;
  const list = numbers.split(/\s+/).map(Number);
  const updatedTree = new Tree(list);
  updatedTree.render();
});
