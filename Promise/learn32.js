// Promise
/*
    Promise object represents the eventual completion(or failure) of an async operation and its resulting value

    Three states : 
        1. Pending 
        2. Rejected
        3. Fulfilled
*/

// creating a new instance of a Promise 
const newPromise = new Promise(function(resolve,reject){
    // Do an async task 
    // Db calls , cryptography, network calls
    setTimeout(function(){
        console.log("Async task executed");
        resolve()
    },1000)
})

newPromise.then(function(){
    console.log("Promise consumed");     
})

/* Output :
Async task executed
Promise consumed */


// Alter way : 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

/*Output :
Async task 2
Async 2 resolved */


// Consuming data from the network 
const promiseNew = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Akshat", email : "guptaakshat@gpat.com"})
    },1000)
})

promiseNew.then(function(user){
    console.log(user);      // output :  { username: 'Akshat', email: 'guptaakshat@gpat.com' }
})


//
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "akshat", email : "akg@akshat.com"})
        }else{
            reject("Error : Something Went Wrong!!!")
        }
        
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){                         // Finally always gets executed 
    console.log("Either Resolved or Rejected");
})


// Handling Promise using Async Await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password : "js@0001"})
        }else{
            reject("Error : JS Went Wrong!!!")
        }
    },1000)
})

async function handlePromise(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

handlePromise();


// 
async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error : Users not available!!!");
    }
}

getAllusers()


// doing above using .then() .catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(user){
    return user.json()
}).then(function(input){
    console.log(input);
}).catch(function(error){
    console.log("Error : ",error);
})

