import IStack from "../IStack"

//基于Array封装一个Stack
class ArrayStack<T = any> implements IStack<T> {
  //定义一个数组存储数据
  private data: T[] = []

  //push方法:将一个元素压栈
  push(element: T): void {
    this.data.push(element)
  }

  //pop方法：移除栈顶的元素,同时返回被移除的元素
  pop(): T | undefined {
    return this.data.pop()
  }

  //peek:返回栈顶的元素，不对栈做任何修改(不会删除元素，只是返回它)
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  //isEmpty:查看栈里面是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  //size：返回栈里的元素个数
  size(): number {
    return this.data.length
  }
}

export default ArrayStack