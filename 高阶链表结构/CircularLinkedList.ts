import LinkedList from "./LinkedList"
class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value)
    //拿到最后一个节点，指向第一个节点
    this.tail!.next = this.head
  }
}
