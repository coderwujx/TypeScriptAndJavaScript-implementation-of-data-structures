import ArrayQueue from "./queue"
class ArrayDeque<T> extends ArrayQueue<T> {
  addFront(value: T): void {
    this.data.unshift(value)
  }

  removeBack(): T | undefined {
    return this.data.pop()
  }
}


export {}