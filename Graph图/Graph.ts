class Graph<T> {
  //顶点
  private verteces: T[] = []
  //边:邻接表
  private adjoinList: Map<T, T[]> = new Map()

  /**
   * 添加顶点
   * @author coderwujx
   * @param vertex 添加顶点
   */
  addVertex(vertex: T) {
    //将顶点添加到map中
    this.verteces.push(vertex)
    //创建一个邻接表中的数组
    this.adjoinList.set(vertex, [])
  }

  /**
   * 添加两条顶点的边
   * @author coderwujx
   * @param vertex1 顶点1
   * @param vertex2 顶点2
   */
  addEdge(vertex1: T, vertex2: T) {
    this.adjoinList.get(vertex1)?.push(vertex2)
    this.adjoinList.get(vertex2)?.push(vertex1)
  }

  /**
   * 遍历图结构
   * @author coderwujx
   */
  traverse() {
    console.log("Graph:")
    this.verteces.forEach(vertex => {
      const edges = this.adjoinList.get(vertex)
      console.log(`${vertex} -> ${edges?.join(" ")}`)
    })
  }
  /**
   * 广度优先搜索
   * @author coderwujx
   */
  breadthFirstSearch() {
    //判断是否有顶点
    if (this.verteces.length === 0) return
    //创建队列结构访问每一个顶点
    const queue: T[] = []
    queue.push(this.verteces[0])

    //创建一个set结构，记录某一个顶点是否被访问过
    const visited = new Set<T>()
    visited.add(this.verteces[0])

    //遍历队列中每一个顶点
    while (queue.length) {
      //访问队列中第一个顶点
      const vertex = queue.shift()!
      console.log(vertex)

      //相邻的顶点
      const neighbors = this.adjoinList.get(vertex)
      if (!neighbors) continue
      for (const nei of neighbors) {
        if (!visited.has(nei)) {
          visited.add(nei)
          queue.push(nei)
        }
      }
    }
  }

  /**
   * 深度优先搜索
   * @author coderwujx
   */
  depthFirstSearch() {
    //判断是否有顶点
    if (this.verteces.length === 0) return
    //创建栈结构
    const stack: T[] = []
    stack.push(this.verteces[0])
    //创建一个set结构，记录某一个顶点是否被访问过
    const visited = new Set<T>()
    visited.add(this.verteces[0])

    //从第一个顶点开始访问
    while (stack.length) {
      const vertex = stack.pop()!
      console.log(vertex)

      const neighbors = this.adjoinList.get(vertex)
      if (!neighbors) continue
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const nei = neighbors[i]
        if (!visited.has(nei)) {
          visited.add(nei)
          stack.push(nei)
        }
      }
    }
  }
}

export default Graph
