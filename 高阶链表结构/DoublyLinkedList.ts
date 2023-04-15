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
}
