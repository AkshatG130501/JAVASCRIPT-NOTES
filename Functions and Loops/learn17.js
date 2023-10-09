//Scoping 

// const a = 10
// let b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

if(true){
    const a = 10
    let b  = 20
    var c = 30
    //local scope
}

console.log(a);  // error
console.log(b);  //error
console.log(c); // 30  (var is not block scoped)

//global scope