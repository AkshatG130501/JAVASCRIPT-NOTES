//Situation : Designing an e-commerce cart where we don't know how many items can be added in a cart and we need all prices
// we don't know how many paramters will be passed 

function calcPrice(num1){
    return num1
}

console.log(calcPrice(200,300,400));  // 200 


// using rest operator 

function calculatePrice(...num1){
    return num1
}

console.log(calculatePrice(200,400,500));  // [ 200, 400, 500 ]  returns an array on which we can loop and calculate total price


//Passing object to function 

//Way -1
const user = {
    name: "Rahul",
    age : 22,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObject(user)

//Way-2
handleObject({
    name : "akshat",
    age : 22,
})

// Passing array to a function 

const arr = [200,400,600]

function func(getArr){
    console.log(getArr[0]);
}

func(arr)