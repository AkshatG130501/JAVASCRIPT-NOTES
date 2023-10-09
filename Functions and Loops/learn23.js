//filter 

mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums = mynums.filter( (num) => (num>4) )
console.log(newNums);

//alter way
mynums.filter( (num) => {
    return num>4
} )


const books = [
    {
        title : "book1",
        genre : "history",
        publish : 1998
    },
    {
        title : "book2",
        genre : "science",
        publish : 1992
    },
    {
        title : "book3",
        genre : "history",
        publish : 2001
    }
]

let userBooks = books.filter( (bk) => (bk.genre==="history"))
console.log(userBooks);


// Map

const newNumbs = mynums.map( (num) => num+10)
console.log(newNumbs);

// Chaining 
const newNumers = mynums.map( (num) => num*10)
                        .map( (num) => num+1)
                        .filter ((num) => (num>40))
console.log(newNumers);


//Reduce

const nums = [1,2,3]

const ans = nums.reduce( function(acc,cur){
    return acc + cur
},0)
console.log(ans);

const ans1 = nums.reduce( (acc,cur) => acc+cur,0)
console.log(ans1);

nums.reduce( (acc,cur) => (acc+cur),0)