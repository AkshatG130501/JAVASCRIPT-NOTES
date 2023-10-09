//Hoisting 

console.log(addOne(5));   // execute without any error 
function addOne(num){
    return num + 1
}



console.log(addTwo(4));    // error
const addTwo = function(num){
    return num + 2
}

// depends on the declaration 