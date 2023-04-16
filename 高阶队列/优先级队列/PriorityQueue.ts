import Heap from "../../heap堆/MaxHeap"

//优先级节点PriorityNode
class PriorityNode<T> {
  value: T
  priority: number
  constructor(value: T, priority: number) {
    this.value = value
    this.priority = priority
  }

  valueOf() {
    return this.priority
  }
}

//优先级队列
class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap()

  enqueue(value: T, priority: number) {
    const newNode = new PriorityNode(value, priority)
    this.heap.insert(newNode)
  }

  dequeue(): T | undefined {
    return this.heap.extract()?.value
  }

  peek(): T | undefined {
    return this.heap.peek()?.value
  }

  isEmpty(): boolean {
    return this.heap.isEmpty()
  }

  size(): number {
    return this.heap.size()
  }
}
