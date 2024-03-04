let test1 = ["local train", "express train", "aeroplane", "bus"]

let newarray = test1.filter((e)=>{
    return e.includes('ae')
}
)
console.log(newarray)

let obj = [{
    "name": "manju",
    age:19
}, {
    "name": "sanju",
    age:11
    }, {
        "name": "anju",
        age:23
}]

let hn = obj.filter(e => e.age > 18).sort((a, b) => b.age - a.age)[0];
console.log(hn)



