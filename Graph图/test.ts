import Graph from "./Graph"
//测试
const graph = new Graph()

for (let i = 65; i < 74; i++) {
  graph.addVertex(String.fromCharCode(i))
}
