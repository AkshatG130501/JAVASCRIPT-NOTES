//

const user = {
    username : "akshat",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);   // prints the complete context 
    }
    
}

user.welcomeMessage()  // akshat, Welcome to Website

user.username = "sam"   // changing context

user.welcomeMessage()  //sam, Welcome to Website


console.log(this);  // returns an empty object i.e {}


function check(){
    let username = "akshat"
    console.log(this.username);  // undefined
}

check()


const chk = function(){
    let username = "aman"
    console.log(this.username);  // undefined
}


// Arrow functions 

// explcit function
const testArrow = (num1,num2) => {
    return num1 + num2
}

//implicit function
const tstArr = (num1,num2) => (num1+num2)

console.log(tstArr(3,4));

//returning an object usuing implicit function 
const objTest = () => ({username : "akshat"})
console.log(objTest());