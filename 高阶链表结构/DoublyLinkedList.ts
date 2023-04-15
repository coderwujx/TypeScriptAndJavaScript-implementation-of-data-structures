import LinkedList, { LinkedNode } from "./LinkedList"
//创建Node节点
export class DoublyLinkedNode<T> {
  prev: DoublyLinkedNode<T> | null = null
  value: T
  next: DoublyLinkedNode<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}
//继承实现双向链表
class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyLinkedNode<T> | null
  protected tail: DoublyLinkedNode<T> | null

  //末尾追加方法
  append(value: T): void {
    const newNode = new DoublyLinkedNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.size++
  }

  //在前面添加节点
  prepend(value: T): void {
    const newNode = new DoublyLinkedNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }

    this.size++
  }

  //反向遍历
  postTraverse(): void {
    const values: T[] = []
    let current = this.tail
    while (current) {
      values.push(current.value)
      current = current.prev
    }

    console.log(values.join("->"))
  }

  //根据索引插入元素
  insert(value: T, position: number): boolean {
    if (position < 0 && position > this.length) return false

    if (position === 0) {
      this.prepend(value)
    } else if (position === this.length) {
      this.append(value)
    } else {
      const newNode = new DoublyLinkedNode(value)
      const current = this.getNode(position) as DoublyLinkedNode<T>

      current.prev!.next = newNode
      newNode.next = current
      newNode.prev = current.prev
      current.prev = newNode
      this.size++
    }

    return true
  }
}
