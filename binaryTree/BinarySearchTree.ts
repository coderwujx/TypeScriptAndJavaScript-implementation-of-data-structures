export class TreeNode<T> {
  value: T
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null
  constructor(value: T) {
    this.value = value
  }
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this)
  }
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this)
  }
}

export class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null

  /**
   * 获取最大值
   * @author coderwujx
   * @returns 返回最大值
   */
  get getMaxValue(): T | null {
    let current = this.root
    while (current && current.right) {
      current = current.right
    }
    return current?.value ?? null
  }
  /**
   * 获取最小值
   * @author coderwujx
   * @returns 返回最小值
   */
  get getMinValue(): T | null {
    let current = this.root
    while (current && current.left) {
      current = current.left
    }
    return current?.value ?? null
  }
  /**
   *
   * @param value 需要搜索的值
   * @returns 返回搜索到的值
   */
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while (current) {
      //找到current
      if (current.value === value) {
        return current
      }

      parent = current
      if (current.value < value) {
        current = current.right
      } else {
        current = current.left
      }

      //如果current有值，那么current保存自己的父节点
      if (current) current.parent = parent
    }
    return null
  }

  /**
   * 插入数据
   * @author coderwujx
   * @param value 插入树中的值
   */
  insert(value: T) {
    //根据当前传入的value创建一个TreeNode节点
    const newNode = new TreeNode(value)
    //判断一下是否有了根节点
    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  /**
   * 插入节点
   * @param Node 传入的根节点
   * @param newNode 需要插入的节点
   */
  private insertNode(Node: TreeNode<T>, newNode: TreeNode<T>) {
    if (Node.value < newNode.value) {
      //根节点小于插入的值
      if (!Node.right) {
        Node.right = newNode
      } else {
        this.insertNode(Node.right, newNode)
      }
    } else {
      //根节点大于插入的值
      if (!Node.left) {
        Node.left = newNode
      } else {
        this.insertNode(Node.left, newNode)
      }
    }
  }

  /**
   * 先序遍历
   * @author coderwujx
   */
  proOrderTraverse() {
    this.proOrderTraverseNode(this.root)
  }
  /**
   * 利用递归遍历节点
   * @author coderwujx
   * @param Node node节点
   */
  private proOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      //打印node节点的值
      console.log(node.value)
      //传入left使其递归遍历
      this.proOrderTraverseNode(node.left)
      //传入right使其递归遍历
      this.proOrderTraverseNode(node.right)
    }
  }

  /**
   * 中序遍历
   * @author coderwujx
   */
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }

  /**
   * 利用递归遍历节点
   * @author coderwujx
   * @param Node node节点
   */
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      //传入left使其递归遍历
      this.inOrderTraverseNode(node.left)
      //打印node节点的值
      console.log(node.value)
      //传入right使其递归遍历
      this.inOrderTraverseNode(node.right)
    }
  }

  /**
   * 后序遍历
   * @author coderwujx
   */
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  /**
   * 利用递归遍历节点
   * @author coderwujx
   * @param Node node节点
   */
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      //传入left使其递归遍历
      this.postOrderTraverseNode(node.left)
      //传入right使其递归遍历
      this.postOrderTraverseNode(node.right)
      //打印node节点的值
      console.log(node.value)
    }
  }
  /**
   * 层序遍历
   * @author coderwujx
   */
  levelOrderTraverse() {
    //如果没有根节点不需要遍历
    if (!this.root) return
    //创建一个队列结构
    const queue: TreeNode<T>[] = [this.root]
    //遍历队列中所有的节点
    while (queue.length) {
      //访问节点
      const current = queue.shift()!
      console.log(current.value)
      //将左节点放入队列
      if (current.left) {
        queue.push(current.left)
      }
      //将右节点放入队列中
      if (current.right) {
        queue.push(current.right)
      }
    }
  }
  /**
   *查找某个值是否有
   * @param value 需要查找的值
   * @returns 返回是否有
   */
  search(value: T): boolean {
    return !!this.searchNode(value)
  }

  /**
   * 寻找后继节点
   * @param delNode 需要删除的节点
   */
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    //获取右子树
    let current = delNode.right
    let successor: TreeNode<T> | null = null
    while (current) {
      successor = current
      current = current.left
      if (current) {
        current.parent = successor
      }
    }
    //找到了后继节点
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right
      successor!.right = delNode.right
    }
    //将删除的节点的left，赋值给后继节点的left
    successor!.left = delNode.left
    return successor!
  }
  /**
   * 删除里面的值
   * @param value 需要删除的值
   * @returns 是否删除成功
   */
  remove(value: T): boolean {
    //搜索当前是都有该节点
    const current = this.searchNode(value)
    if (!current) return false

    //判断是否为叶子节点
    if (current.left === null && current.right) {
      //判断叶子节点是否是根节点
      if (current === this.root) {
        this.root = null
      } else if (current.isLeft) {
        current.parent!.left = null
      } else if (current.isRight) {
        current.parent!.right = null
      }
    } else if (current.right === null) {
      // 只有一个子节点：左子节点
      if (current === this.root) {
        this.root = current.left
      } else if (current.isLeft) {
        current.parent!.left = current.left
      } else if (current.isRight) {
        current.parent!.right = current.left
      }
    } else if (current.left === null) {
      //只有一个右节点
      if (current === this.root) {
        this.root = current.right
      } else if (current.isLeft) {
        current.parent!.left = current.right
      } else if (current.isRight) {
        current.parent!.right = current.right
      }
    } else {
      //有两个子节点
      const successor = this.getSuccessor(current)
      if (current === this.root) {
        this.root = successor
      } else if (current.isLeft) {
        current.parent!.left = successor
      } else if (current.isRight) {
        current.parent!.right = successor
      }
    }

    return true
  }
}
