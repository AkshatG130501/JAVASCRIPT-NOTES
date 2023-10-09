//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Akshat",
    "full name" : "Akshat Gupta",
    [mySym] : "myKey1",  // correct way to write symbol , if written without sq. brackets => it is considered as a string
    age : 22,
    city : "Jaipur",
    state : "Rajasthan",
    email : "akshat@gmail.com",
    isLoggedIn : false,
}

// props declared without double quotes are considered as strings : name => "name"(interpreted by system)

// accessing the properties of an object
JsUser.email = "guptaakshat@gamil.com"  // way to  change values 
JsUser["email"] = "guptaak@gmail.com"  // better way

// for cases like "full name"
//JsUser.full name can't access like this
console.log(JsUser["full name"]);  // can be accessed like this


console.log(JsUser[mySym]); 

// freeze object so no values can be changed
// Object.freeze(JsUser)

JsUser.email = "akg@gmail.com"  // doesn't give error if we try to change value , but no change occurs 
console.log(JsUser["email"]);  //guptaak@gmail.com  

JsUser.greeting = function(){
    console.log("Hello user");
}

console.log(JsUser.greeting);  // reference to the function
console.log(JsUser.greeting()); 




