const accountId = 210203
let accountEmail = "akshat@gmail.com"
var accountPassword = "21345"
accountCity = "Jaipur"  //Not preferred
let accountState;        //undefined

// accountId = 222345  => Not allowed => can't change const
accountEmail = "akg@gmail.com"
accountPassword = "12345"
accountCity = "Banglore"

//console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
Prefer not to use var in javascript 
beacuse issue in block scope and functional scope
*/ 