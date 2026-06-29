const myArr = [0,1,2,3,4]
const myheros = ["Shktiman", "nagarj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[1])
myArr.push(6)
myArr2.push(9)
myArr.pop(0)

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))
console.log(myArr)

// Slice, splice
console.log("A", myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log("C", myn2)
console.log(myn2)