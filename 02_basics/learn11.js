const marvel = ["thor","ironman","hulk"]
const dc = ["superman","flash","batman"]

//marvel.push(dc)

console.log(marvel);  //[ 'thor', 'ironman', 'hulk', [ 'superman', 'flash', 'batman' ] ]


console.log(marvel.concat(dc));  // [ 'thor', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]


// Better way 
// Spread operator

const newArr = [...marvel,...dc]
console.log(newArr);  //[ 'thor', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]