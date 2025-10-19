

const prettyPrint = (node, prefix = '', isLeft = true, output = []) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false,output);
  }

  output.push(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true, output);
  }

  return output;
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
        const lines = prettyPrint(this.root)
        document.body.insertAdjacentHTML('beforeend', `<pre>${lines.join('\n')}</pre>`);

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

let list = [];
const btnsend = document.querySelector('.sendbtn')
const input = document.querySelector('.inputnumbers');
btnsend.addEventListener('click', () =>{
  let numbers = input.value;
  const numberssplit = numbers.split(" ");
  for(let i = 0; i < numberssplit.length; i++){
    list.push(Number(numberssplit[i]));
    console.log([numberssplit[i]])

  }
  list = test;
  console.log(test)
})



let test = [1,2,3,4,5,6,7,10,15,20];

balnc = new Tree(test, 1, 6);
