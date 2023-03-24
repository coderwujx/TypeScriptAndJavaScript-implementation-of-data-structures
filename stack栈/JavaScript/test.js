import ArrayStack from "./ArrayBasedImplementation/stack"
//test
const stack = new ArrayStack()
stack.push("aaa")
stack.push("bbb")
stack.push("ccc")

console.log(stack.pop())
console.log(stack.peek())

console.log(stack.pop())
console.log(stack.pop())

console.log(stack.isEmpty())

console.log(stack.size())