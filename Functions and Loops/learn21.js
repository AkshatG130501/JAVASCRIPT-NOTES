// Javascript Execution Context 

/*
When a code file is given to JS to run it creates 
    1. global execution context(reffered by this)  in case of browser 'this' is window 
    2. function execution context 


    JS runs in two phases : 
        1. Memory Creation Phase  (only Memory Allocation)
        2. Execution Phase
*/


// Eg.
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(3,4)


/*
1. Global Execution Context -> this

2. Mem. Creation Phase ->  
    val1 -> undefined
    val2 -> undefined
    addNum() -> definition
    result1 -> undefined
    result2 -> undefined

3. Execution Phase
    val1 -> 10
    val2 -> 5
    addNum -> new variable environment + execution thread  // after the work is completed it is deleted
               1. Mem. Creation Phase
                  val1 -> undefined
                  val2 -> undefined
                  total->undefined
               
               2. Execution Phase 
                  num1 -> 10
                  num2 -> 5
                  total -> 15   -> returns to global execution context
    result1 -> 15
    result2 -> new variable env + execution thread 
                same as above
*/

