//基于数组实现queue
class ArrayQueue {
  //定义一个数组保存数据
  constructor() {
    this._data = []
  }
  //enqueue:向队列尾部添加一个（或多个）新的项
  enqueue(element) {
    this._data.push(element)
  }
  //dequeue:移除队列的第一个元素，并返回被移除的元素
  dequeue() {
    return this._data.shift()
  }
  //front/peek:返回队列中第一个元素————最先被添加，也将是最先被移除的元素
  front() {
    return this._data[0]
  }
  peek() {
    return this.front()
  }
  //isEmpty:如果队列中不包含任何元素，返回ture，否则返回false
  isEmpty() {
    return this._data.length === 0
  }
  //size:返回队列包含的元素个数，与数组的length属性类似
  get size() {
    return this._data.length
  }
}

module.exports = {
  ArrayQueue
}
