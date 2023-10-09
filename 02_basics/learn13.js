// // Two ways to declare an object
// const tinderUser = new Object()  // singleton
// const tinderUser = {}   // Non-Singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false


//merging objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a",6:"b"}

const newObj = Object.assign({},obj1,obj2,obj3)
console.log(newObj);   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Alter way 
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);


// Array of objects
const users = [
    {
        name : "Akshat",
        age : 22,
    },
    {
        name: "Rahul",
        age: 20,
    },
    {
        name: "raj",
        age: 28,
    }
]

console.log(users[1].name);  // Rahul


// To loop on the object keys and values we use Object.keys() => returns an array of keys and values
console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  // [ '123abc', 'sam', false ]