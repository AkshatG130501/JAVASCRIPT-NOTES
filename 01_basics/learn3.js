let num = "33"
let num1 = Number(num);

console.log(num1);  // 33


let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);  // NAN

let x = null
let val = Number(x)

console.log(val);  // 0


let y = undefined
let val1 = Number(y);

console.log(val1);  // NAN


let check = true
let ans = Number(check)

console.log(ans);  // 1  and  if check = false  => 0


let isLogged = 1
let ans1 = Boolean(isLogged)

console.log(ans1);  // true


let st = ""
let a = Boolean(st)

console.log(a);  //false