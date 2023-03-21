import HashTable from "./hashTable"
//测试桶过
const hashTable = new HashTable()
hashTable.put("aaa", 100)
hashTable.put("aaa", 200)
hashTable.put("bbb", 300)
console.log(hashTable.storage)
hashTable.put("aas", 200)
hashTable.put("bcc", 300)
console.log(hashTable.storage)
hashTable.put("bb", 300)
hashTable.put("as", 200)
hashTable.put("cc", 300)
console.log(hashTable.storage)