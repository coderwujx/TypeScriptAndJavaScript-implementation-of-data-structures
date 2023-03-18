/*
有效的括号， 给定一个只包含'('')','{''}','['']'的字符串s,判断字符串是否有效
  1.左括号必须用相同的类型的右括号闭合
  2.左括号必须以正确的顺序闭合
  3.右括号都有一个对应的相同类型的左括号
*/
import ArrayStark from "../ArrayBasedImplementation/stack"
function isValid(s: string): boolean {
  //创建一个栈结构
  const stack = new ArrayStark<string>()

  //便利s中所有的括号
  for (let i = 0; i < s.length; i++) {
    //对比遍历出来的括号
    const c = s[i]
    switch (c) {
      case "(":
        stack.push(")")
        break
      case "{":
        stack.push("}")
        break
      case "[":
        stack.push("]")
        break
      default:
        if (c !== stack.pop()) return false
        break
    }
  }

  //查看stack中是否为空
  return stack.isEmpty()
}

//test
console.log(isValid("(]"))

console.log(isValid("()[]{}"))

console.log(isValid("()"))

export {}
