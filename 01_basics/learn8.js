// Strings 

const name = "Akshat"
const count = 50

// console.log(name + count + "value");  // not preferred to use this way

console.log(`My name is ${name} and the count is ${count}`);

const gameName = new String("  Parziwal  ")

console.log(gameName.__proto__);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));
console.log(gameName.includes('q'));
console.log(gameName);
console.log(gameName.trim());  //trims the extra spaces in side

const url = "https://akshat.com/akshat%20gupta"
console.log(url.replace('%20', '-'));