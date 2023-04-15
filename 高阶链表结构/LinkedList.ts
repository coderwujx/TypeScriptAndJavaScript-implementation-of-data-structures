//创建Node节点
export class LinkedNode<T> {
  value: T
  next: LinkedNode<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

//创建linkedList
export class LinkedList<T> {
  protected head: LinkedNode<T> | null = null
  protected size: number = 0

  //新增尾部:总是指向链表的尾部
  protected tail: LinkedNode<T> | null = null

  get length(): number {
    return this.size
  }

  //封装私有方法
  //根据position，获取节点
  private getNode(position: number): LinkedNode<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
  }

  //判断是否为最后一个节点
  private isTail(node: LinkedNode<T>): boolean {
    return node === this.tail
  }

  //追加节点
  append(value: T): void {
    //根据value创建节点
    const newNode = new LinkedNode(value)

    //判断this.head是否为null
    if (!this.head) {
      this.head = newNode
    } else {
      this.tail!.next = newNode
    }

    this.tail = newNode
    //size++
    this.size++
  }

  //遍历链表
  traverse() {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }
    }

    //判断是否为循环链表
    if (this.head && this.tail?.next === this.head) {
      values.push(this.head.value)
    }
    console.log(values.join("-> "))
  }

  //插入方法
  insert(value: T, position: number): boolean {
    //判断越界
    if (position < 0 || position > this.size) return false

    //创建新节点
    const newNode = new LinkedNode(value)

    //判断节点是都插入头部
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode

      if (position === this.length) {
        this.tail = newNode
      }
    }

    this.size++

    return true
  }

  //删除节点
  removeAt(position: number): T | null {
    //判断是否越界
    if (position < 0 || position >= this.size) return null

    //判断是否为第一个节点
    let current = this.head
    if (position === 0) {
      this.head = current?.next ?? null

      if (this.length === 1) {
        this.tail = null
      }
    } else {
      const previous = this.getNode(position - 1)
      //需要给current重新赋值
      current = previous!.next

      //找到需要的节点
      previous!.next = current?.next?.next ?? null

      if (position === this.length - 1) {
        this.tail = previous
      }
    }
    this.size--

    return null
  }

  //remove:根据元素删除
  remove(value: T): T | null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  //查找元素
  get(position: number): T | null {
    //越界问题
    if (position < 0 || position >= this.size) return null
    //查找元素，并且范围元素
    return this.getNode(position)?.value ?? null
  }

  //更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false
    //获取节点更新
    const currentNode = this.getNode(position)
    currentNode!.value = value
    return true
  }

  //根据值获取索引
  indexOf(value: T): number {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next
      }
      index++
    }
    return -1
  }

  //是否为空
  isEmpty(): boolean {
    return this.size === 0
  }
}

export default LinkedList
