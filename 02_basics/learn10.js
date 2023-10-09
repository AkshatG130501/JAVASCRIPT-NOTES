// Arrays
/*
Javascript arrays are resizable , can contain mix datatypes
zero-indexed
JS array-copy operations create shallow copies
*/

/*
Shallow Copy -> Of an object is a copy whose props share the same reference
Deep Copy -> Do not share the same reference 
*/

const myArr  = [1,2,3,4,5]
const heroes = ["iron man","thor","hulk"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]);
console.log(myArr2[1]);


// Array Methods 
myArr.push(6)
console.log(myArr); //[ 1, 2, 3, 4, 5, 6 ]

myArr.pop();  //pops the last element


myArr.unshift(9)  // adds 9 to the front of the array
myArr.shift()  // removes the first element of the array

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);  // Join operation converts array to string 

//slice vs splice 

const newArr1 = myArr.slice(1,3)
console.log(myArr);   // [ 1, 2, 3, 4, 5 ]
console.log(newArr1); // [ 2, 3 ]

const newArr2 = myArr.splice(1,3)
console.log(myArr);  // [ 1, 5 ]
console.log(newArr2); // [ 2, 3, 4 ]

// Splice manipulates the original array , while slice does not.