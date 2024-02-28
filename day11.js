// Array Methods

let arr= [1,2,3,4,5]
 // push | unshift | pop | shift
arr.push(5) //push
arr.unshift(9) //unshift
console.log(arr)

arr.pop() //pop
arr.shift() //shift
console.log(arr)

// arr.splice(2,2)
// console.log(arr)

 
// Join | Slice | Concat | copyWithin | spread operator
console.log(arr.slice(0,2)) //slice
let arr1=[100,200,300]
console.log(arr1.concat(arr))  //concat
console.log(arr)

console.log(arr.join(' ')) //join

let ar1 = [1,2,3]
let ar2 = [4,5,6]
let ar3 = [...ar1,...ar2]
console.log(ar3) //spread operator

console.log(arr)
console.log(arr.copyWithin(0,2,4)) //copywithin



