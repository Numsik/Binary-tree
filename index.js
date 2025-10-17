//UI
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};


class node{
    constructor(data = null,left = null, right = null){
        this.data = data
        this.left = left 
        this.right = right
    }
}

class Tree{
    constructor(array){
        this.root = this.buildTree(array, 0, array.length -1)
        prettyPrint(this.root)

    }
    buildTree(array, start, end){
        if (start > end) return null;

        let mid = parseInt((start + end) / 2);
        let root = new node(array[mid])
        root.left = this.buildTree(array, start, mid - 1)
        root.right = this.buildTree(array,mid + 1, end)
        return root;

    }
}
function sortedarray(array, start, end){
    const mid = array.length / 2;
    const firsthalf = array.slice(0,mid);
    const secondhalf = array.slice(mid, -1)
    return {firsthalf, secondhalf}
}
console.log(sortedarray([1,5,6,10,5,4]))

