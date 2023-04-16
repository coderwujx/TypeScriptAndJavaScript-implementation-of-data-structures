import IQueue from "../../queue队列/Typescript/IQueue"

//基于数组实现queue
export class ArrayQueue<T> implements IQueue<T> {
  //定义一个数组保存数据
  protected data: T[] = []
  //enqueue:向队列尾部添加一个（或多个）新的项
  enqueue(element: T): void {
    this.data.push(element)
  }
  //dequeue:移除队列的第一个元素，并返回被移除的元素
  dequeue(): T | undefined {
    return this.data.shift()
  }
  //front/peek:返回队列中第一个元素————最先被添加，也将是最先被移除的元素
  front(): T | undefined {
    return this.data[0]
  }
  peek(): T | undefined {
    return this.front()
  }
  //isEmpty:如果队列中不包含任何元素，返回ture，否则返回false
  isEmpty(): boolean {
    return this.data.length === 0
  }
  //size:返回队列包含的元素个数，与数组的length属性类似
  get size(): number {
    return this.data.length
  }
}

export default ArrayQueue
