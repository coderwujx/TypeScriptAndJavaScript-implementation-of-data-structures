/**
 * 最大堆
 * @author coderwujx
 */
class Heap<T> {
  //保存数据
  private data: T[] = []
  //堆的大小
  private length: number = 0

  constructor(arr: T[] = []) {
    if (arr.length === 0) return
    this.buildHeap(arr)
  }

  //私有工具方法
  private swap(i: number, j: number) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  //常见的方法
  //向堆中插入新的数据
  insert(value: T): void {
    //将元素放在数组尾部
    this.data.push(value)
    this.length++
    //维护最大堆特性(最后的元素进行上滤操作)
    this.heapify_up()
  }

  //上滤操作
  private heapify_up() {
    let index = this.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.data[index] >= this.data[parentIndex]) {
        break
      }
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  //提取元素
  extract(): T | undefined {
    //判断元素个数是否为0或1
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()!
    }

    //提取并且放回最大值
    const topValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--

    //维护最大堆特性，进行下滤操作
    this.heapify_down(0)
    return topValue
  }

  private heapify_down(number: number) {
    let index = number
    while (2 * index + 1 <= this.length - 1) {
      //找到左右子节点
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = leftChildIndex + 1
      //找到左右子节点较大的值
      let largerIndex = leftChildIndex
      if (
        rightChildIndex < this.length &&
        this.data[rightChildIndex] < this.data[leftChildIndex]
      ) {
        largerIndex = rightChildIndex
      }

      //较大的值的index位置进行比较
      if (this.data[index] <= this.data[largerIndex]) {
        break
      }
      //交换位置
      this.swap(index, largerIndex)
      index = largerIndex
    }
  }

  //返回堆中的最大/最小元素
  peek(): T | undefined {
    return this.data[0]
  }

  //获取数组长度
  size(): number {
    return this.length
  }

  //判断堆是否为空
  isEmpty(): boolean {
    return this.length === 0
  }

  //通过一个列表来构造堆
  buildHeap(arr: T[]) {
    //先使用array的值
    this.data = arr
    this.length = arr.length

    //从第一个非叶子节点，开始进行下滤操作
    const start = Math.floor((this.length - 1) / 2)
    for (let i = start; i >= 0; i++) {
      this.heapify_down(i)
    }
  }
}

export {}
