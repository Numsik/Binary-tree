function sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arr[mid]);

    // Divide from middle element
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

    return root;
}

// Function which return BST
function sortedArrayToBST(arr) {
    return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
}



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
        this.root = this.buildTree

    }
}
function sortedarray(array, start, end){
    const mid = array.length / 2;
    const firsthalf = array.slice(0,mid);
    const secondhalf = array.slice(mid, -1)
    return {firsthalf, secondhalf}
}
console.log(sortedarray([1,5,6,10,5,4]))

