// Comparison of Data types


console.log(2>1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);
console.log(2<1);


console.log("2" > 1);
console.log("02" > 1);    // Not a good way to compare 
// Always compare two values with same datatype

console.log(null > 0);  // false
console.log(null == 0 ); //false
console.log(null >= 0 ); //true 


console.log(undefined > 0 );  // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false

console.log("2" == 2); // true
console.log("2" === 2);  //false
