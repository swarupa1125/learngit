// Loopings
// Loops - if , if else , nested if , for , while , do while , for of , for in

//IF | IF-Else | Nested-IF
let num=2
if(num>10) // if 
{
    console.log("number is greater than 10")
}
else if (num<10) // else if
{
    console.log("number is lesser than 10")
}
else if (num==10)
{
    console.log("number is equal to 10")
}
else  //Else
{
    console.log("error")
}

// For Loop | While Loop
console.log("For Loop")
let array = [1,2,3,4,5] 
for (let i=0;i<array.length;i++)
{
    console.log(array[i])
}
// While Loop
console.log("While Loop")
let y=0;
while(y<array.length)
{
console.log(array[y])
y++
}

// Do While Loop
console.log("DO While Loop")
let z=100;
do{
    console.log(array[z])
}while(z<array.length)

//For In
console.log("For In")
array=[1,2,3,4,5,6]
for (let obj in array)
{
    console.log(obj)
}

let object={
    name: "swarupa",
    company : "accenture"
}
console.log(object["name"])

for(let obj in object){
    console.log(object[obj])
}

// Switch Case

switch ("Monday"){
        case "Monday":
            console.log("Yes it is the first day of the week")
        break;
        case "Tuesday":
            console.log("Second day ")
        break;
        default:
            console.log("Not a day")
        break;
}

// STRING METHODS
let w1="This is a Java-Script Learning"
console.log(w1.toUpperCase())
console.log(w1.toLowerCase())
console.log(w1.charAt(10))
console.log(w1.concat(" merge"))
console.log(w1.split('a'))
console.log(w1.slice(-8,-1))
console.log(w1.substring(0,4,))
console.log(w1.substr(10,3))



