let w1="This is a  class the class is Javascript"

console.log(w1.replace("class","not a class"))
console.log(w1.repeat(2))

let w2="swarupa"

console.log(w2.padStart(10,"good"))
console.log(w2.padEnd(10,"goo"))

let w3=" this is a goods"
console.log(w3)
console.log(w3.trim())

console.log(w1.includes("class"))
console.log(w1.startsWith("is"))
console.log(w1.endsWith("script"))
console.log(w1.indexOf(/Class/i))
console.log(w1.lastIndexOf("class"))
console.log(w1.search(/Class/gi))
console.log(w1.match(/class/gi))

let hehe=w1.matchAll("class")
console.log(Array.from(hehe)[0][0])
