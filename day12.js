let array=[1,2,3,4]

console.log(array.fill(0,1,2))

array.sort(function(a,b){
    return a-b;
})
console.log(array)

console.log("Entries | Keys | Values")
for(let a of array.keys()){
    console.log(a)
}
console.log(array.includes(2))
console.log(array)
let newred = array.reduce(function(e,i){
    return e+i;
})
console.log(newred)

let armap = array.map((e)=>{
    return e+10
})
console.log(armap)

let arfor = array.forEach((e)=>{
    return e+100
})
console.log(arfor)
console.log(array)

let arfil=array.filter((e)=>{
    return e>1
})
console.log(arfil)

let arfind=array.every((e)=>{
    return e==0
})
console.log(arfind)
console.log(array)


