//基于Array封装一个Stack
class ArrayStack {
  //定义一个数组存储数据
  constructor(){
    this._data = []
  }

  //push方法:将一个元素压栈
  push(element) {
    this._data.push(element)
  }

  //pop方法：移除栈顶的元素,同时返回被移除的元素
  pop(){
    return this._data.pop()
  }

  //peek:返回栈顶的元素，不对栈做任何修改(不会删除元素，只是返回它)
  peek(){
    return this._data[this._data.length - 1]
  }

  //isEmpty:查看栈里面是否为空
  isEmpty() {
    return this._data.length === 0
  }

  //size：返回栈里的元素个数
  size(){
    return this._data.length
  }
}

module.exports = {
  ArrayStack
}