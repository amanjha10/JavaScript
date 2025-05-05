// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345345345345345345n
console.log(typeof bigNumber)


// Reference (Non Primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myobj ={
    name:"aman",
    age:22,
}

const myFunction = function (){
    console.log("Hello World");
}