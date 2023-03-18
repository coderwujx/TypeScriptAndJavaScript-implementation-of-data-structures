//创建Node节点
class LinkedNode<T> {
  value: T
  next: LinkedNode<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

//创建linkedList
class LinkedList<T> {
  private head: LinkedNode<T> | null = null
  private size: number = 0

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

  //追加节点
  append(value: T): void {
    //根据value创建节点
    const newNode = new LinkedNode(value)

    //判断this.head是否为null
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      //current肯定是指向最后一个节点的
      current.next = newNode
    }

    //size++
    this.size++
  }

  //遍历链表
  traverse() {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
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
    } else {
      const previous = this.getNode(position - 1)
      //找到需要的节点
      previous!.next = current?.next?.next ?? null
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
      current = current.next
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
