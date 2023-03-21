class HashTable<T = any> {
  //定义一个数组用来存放链地址法中的链
  private storage: [string, T][][] = []
  //定义数组的长度
  private length: number = 7
  //记录已经存放的数据个数
  private count: number = 0

  /**
   * 哈希函数，将key转换为index
   * @author coderwujx
   * @param key 需要转换的key
   * @param max 数组的长度，最大数值
   * @returns 索引值
   */
  private hashFunc(key: string, max: number): number {
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

  /**
   * 插入或者修改
   * @author coderwujx
   * @param key 需要插入的键
   * @param value 需要插入的值
   */
  put(key: string, value: T) {
    //根据key获取数组中的索引值
    const index = this.hashFunc(key, this.length)
    //取出索引值对应的数组
    let buckwt = this.storage[index]

    //判断buckwt中是否有值
    if (!buckwt) {
      buckwt = []
      this.storage[index] = buckwt
    }

    //确定已经有一个数组了，但是数组中是否已经存在key是不确定的
    let isUpdate = false
    for (let i = 0; i < buckwt.length; i++) {
      const tuple = buckwt[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        //修改/更新操作
        tuple[1] = value
        isUpdate = true
      }
    }

    //如果没有进行代码覆盖，则在当前位置进行添加
    if (!isUpdate) {
      buckwt.push([key, value])
    }
  }
  /**
   * 获取值
   * @author coderwujx
   * @param key 要获取值的key
   * @returns 给获取的值
   */
  get(key: string): T | undefined {
    //根据key获取索引值
    const index = this.hashFunc(key, this.length)

    //获取buckwt(桶)
    const buckwt = this.storage[index]
    //如果没有值
    if (!buckwt) return undefined

    //对buckwt可进行遍历
    for (let i = 0; i < buckwt.length; i++) {
      const tuple = buckwt[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        return tuple[1]
      }
    }
    //没有找到
    return undefined
  }
  /**
   *删除hash值
   * @author coderwujx
   * @param key 要获取值的key
   * @returns 被删除的值
   */
  delete(key: string): T | undefined {
    //根据key获取索引值
    const index = this.hashFunc(key, this.length)
    //获取buckwt(桶)
    const buckwt = this.storage[index]
    //判断该位置是否有值
    if (!buckwt) return undefined
    //对桶进行遍历
    for (let i = 0; i < buckwt.length; i++) {
      const tuple = buckwt[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        //剪切掉值
        buckwt.splice(i, 1)
        this.count--
        return tuple[1]
      }
    }
    return undefined
  }
}

export default HashTable
