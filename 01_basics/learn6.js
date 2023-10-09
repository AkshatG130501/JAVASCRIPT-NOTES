/* How the data is stored and accessed in the memory 
   data is categorized in two types :
   1. Primitive 
   2. Non-Primitive
*/

/*
#Primitive
Call By Value 
7 Types : String , Number, Boolean, null, undefined, Symbol, BigInt
*/

/*
# Non-primitive (Reference)
  Array, Objects, Functions
*/

// Javascript is dynamically typed language => datatype of any variable is inferred at runtime

// Primitive

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const temp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);  // false
console.log(id === anotherId); // false

const bigNumber = 23345685759738038474n;  // bigint


// Non-Primitive
const names = ["Akshat","Aman","Akansha","Aishwarya","Sahaj","Madhur"]

let myObject = {
    name: "Akshat",
    age : 22,
}

let myFunc = function(){
    console.log("Hello World");
}


// Return type of variables in javascript
/*  
    Number -> Number
    BigInt -> BigInt
    String -> String
    Boolean -> Boolean
    Symbol -> Symbol
    undefined -> undefined
    null -> object



    function -> function
    Object -> object
    array -> object
*/

