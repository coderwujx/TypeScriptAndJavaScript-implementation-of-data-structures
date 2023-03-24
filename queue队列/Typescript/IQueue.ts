interface IQueue<T> {
  enqueue(element: T)
  dequeue(): T | undefined
  front(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  get size(): number
}

export default IQueue
