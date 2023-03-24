import { BinarySearchTree, TreeNode } from "./BinarySearchTree"
//测试代码
const bst = new BinarySearchTree<number>()

//插入值
bst.insert(20)
bst.insert(30)
bst.insert(10)
//先序遍历
// bst.proOrderTraverse()
// bst.inOrderTraverse()
// bst.postOrderTraverse()
// bst.levelOrderTraverse()
console.log(bst.getMaxValue)
console.log(bst.getMinValue)
