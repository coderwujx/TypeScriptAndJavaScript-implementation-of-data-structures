/**
 * 哈希函数，将key转换为index
 * @author coderwujx
 * @param key 需要转换的key
 * @param max 数组的长度，最大数值
 * @returns 索引值
 */
function hashFunc(key: string, max: number): number {
  //计算HashCode
  let hashCode = 0
  const length = key.length
  for (let i = 0; i < length; i++) {
    //根据霍纳法则计数hashCode
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }

  //求出索引值
  const index = hashCode % max
  
  return index
}

export default hashFunc