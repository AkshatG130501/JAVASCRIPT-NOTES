// for of loops 

// const arr = [1,2,3,4,5]

// for (const it of arr) {
//     console.log(it);
// }

// const str = "Hello World"

// for (const it of str) {
//     console.log(it);
// }

// Maps  -> collection of key-value pairs

const map = new Map()

map.set("IN","India")
map.set("Fr","France")
map.set("GM","Germany")

for (const it of map) {
    console.log(it);
}


for (const [key,value] of map) {
    console.log(key,":-",value);
}

// With for-of loop we can't iterate over objects

// Iterating over objects using for-in      
const myObj = {
    "Js" : "Javascript",
    "cpp" : "c++",
    "rb" : "ruby",
}

for (const key in myObj) {
    console.log(key);
}

for(const key in myObj){
    console.log(myObj[key]);
}


// for-in works for array too
const langs = ["rb","js","cpp"]

for (const key in langs) {
    console.log(langs[key]);
}

// for-each loop 

const coding = ["js","ruby","cpp","java"]

coding.forEach(function (it){
    console.log(it);
})
// alter way using arrow function
coding.forEach( (item)=>{
    console.log(item);
})


// alter way 
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


// for-each carries the array element along with the index and the array
coding.forEach((element ,index,array)=>{
    console.log(element,index,array);
})
    
/*
js 0 [ 'js', 'ruby', 'cpp', 'java' ]
ruby 1 [ 'js', 'ruby', 'cpp', 'java' ]
cpp 2 [ 'js', 'ruby', 'cpp', 'java' ]
java 3 [ 'js', 'ruby', 'cpp', 'java' ]
*/