// Stack(Primitive)  vs Heap(Non-Primitive)

let ytname = "Moviebaaz"
let anotherName = "Gaming"

console.log(ytname);
console.log(anotherName);

let obj1 = {
    name: "Akshat",
    age : 22,
}

let obj2 = obj1

obj2.age = 21

console.log(obj1.age);
console.log(obj2.age);


// Stack -> By value , Heap -> By reference