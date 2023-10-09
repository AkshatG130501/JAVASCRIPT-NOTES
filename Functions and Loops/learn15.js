// Functions 

function sayMyName(){
    console.log("Akshat");
}

sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}

addTwoNumbers(3,4)


// Parameters -> values passed when defining a function 
// Arguements -> values passed when calling a function 

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Akshat"));
console.log(loginUserMessage());  // if no value passed it would give undefined

// giving a default value to a parameter
function loggin(username = "aksh"){
    console.log(username);
}
console.log(loggin());