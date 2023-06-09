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
   * 传入一个数字判断是否为质数
   * @author coderwujx
   * @param num 传入一个数字
   * @returns 是否为质数
   */
  isPrime(num: number): boolean {
    const sqrt = Math.sqrt(num)
    for (let i = 2; i < sqrt; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  /**
   * 传入一个数字返回下一个质数
   * @param num 传入一个数字
   * @returns 返回下一个质数
   */
  private getNextPrime(num: number): number {
    let newPrime = num
    //判断传入的方法是否是一个质数
    while (this.isPrime(newPrime)) {
      newPrime++
    }
    return newPrime
  }

  /**
   * 扩容或者缩减函数
   * @author coderwujx
   * @param newLength 扩容的长度
   */
  private reSize(newLength: number) {
    //赋值新的长度
    this.length = this.getNextPrime(newLength)

    //获取原来的所有的数据，并且放进新的数据
    //数据初始化
    const oldStorage = this.storage
    this.storage = []
    this.count = 0
    //对数据进行和遍历
    oldStorage.forEach(buckwt => {
      //桶里面没有数据
      if (!buckwt) return

      //桶里有数据
      for (let i = 0; i < buckwt.length; i++) {
        const tuple = buckwt[i]
        this.put(tuple[0], tuple[1])
      }
    })
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
      this.count++

      //如果发现loadFactor超过0.75将自动扩容
      const loadFactor = this.count / this.length
      if (loadFactor > 0.75) {
        this.reSize(this.length * 2)
      }
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

        //当loadFactor低于0.25时进行缩容
        if (this.count / this.length < 0.25 && this.length > 7) {
          this.reSize(Math.floor(this.length / 2))
        }
        return tuple[1]
      }
    }
    return undefined
  }
}

export default HashTable
