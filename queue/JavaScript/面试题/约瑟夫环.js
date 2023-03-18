const { ArrayQueue } = require('../ArrayBase/queue');

function lastRemaining(n, m) {
  //创建队列
  const queue = new ArrayQueue()

  //将所有的数字加入队列
  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }

  //查看队列中是否还有数字
  while (queue.size > 1) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }

  return queue.dequeue()
}

console.log(lastRemaining(5, 3))
console.log(lastRemaining(10, 17))