const { ArrayQueue } = require('../JavaScript/ArrayBase/queue');
const queue = new ArrayQueue()

queue.enqueue("aaa")
queue.enqueue("bbb")
queue.enqueue("ccc")

console.log(queue.dequeue())
console.log(queue.size)
console.log(queue.front())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.isEmpty())
