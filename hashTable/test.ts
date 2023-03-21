import HashTable from "./hashTable"
//测试桶过
const hashTable = new HashTable()
hashTable.put("aaa", 100)
hashTable.put("aaa", 200)
hashTable.put("bbb", 300)

console.log(hashTable.get("aaa"))
console.log("被删除的",hashTable.delete("aaa"))
console.log(hashTable.get("aaa"))
