import LinkedList from "./LinkedList"
class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value)
    //拿到最后一个节点，指向第一个节点
    this.tail!.next = this.head
  }

  //插入节点
  insert(value: T, position: number): boolean {
    const isSuccess = super.insert(value, position)
    if (isSuccess && (position === this.length - 1 || position === 0)) {
      this.tail!.next = this.head
    }

    return isSuccess
  }
}
