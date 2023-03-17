import ArrayStack from "../ArrayBasedImplementation/stack"

function decimalToBinary(decimal: number): string {
  //创建一个stack存放数据
  const stack = new ArrayStack<number>()

  //使用循环while
  while (decimal > 0) {
    const result = decimal % 2
    stack.push(result)

    //重新赋值decimal
    decimal = Math.floor(decimal / 2)
  }

  //取出所有数
  let binary = ""
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }

  return binary
}

console.log(decimalToBinary(35))
