/**
 * 传入一个数字判断是否为质数
 * @author coderwujx
 * @param num 传入一个数字
 * @returns 是否为质数
 */
function isPrime(num: number): boolean {
  const sqrt = Math.sqrt(num)
  for (let i = 2; i < sqrt; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
