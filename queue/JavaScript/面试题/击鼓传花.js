const {ArrayQueue} = require("../ArrayBase/queue")

function hotPotato(names, num) {
  //创建队列保存数据
  const queue = new ArrayQueue()

  //将所有人入队操作
  for (const name of names) {
    queue.enqueue(name)
  }

  //淘汰
  while (queue.size > 1) {
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }
    //淘汰
    queue.dequeue()
  }
  return queue.dequeue()
}

console.log(hotPotato(["aaa", "bbb", "ccc", "ddd"], 3))