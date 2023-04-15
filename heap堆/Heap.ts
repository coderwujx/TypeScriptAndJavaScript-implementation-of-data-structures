//堆结构
class Heap<T> {
  //保存数据
  private data: T[] = []
  //堆的大小
  private length: number = 0

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
      if (this.data[index] <= this.data[parentIndex]) {
        break
      }
      this.swap(index, parentIndex)
      index = parentIndex
    }
  }

  //从堆中删除最大/最小元素
  extract(): T | undefined {
    return undefined
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
  buildHeap(arr: T[]) {}
}

export {}
