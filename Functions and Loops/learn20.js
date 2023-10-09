// Immediately Invoked Function Expression (IIFE) 
// function that runs the moment it is invoked or called 

// IIFEs prevent pollution of the global JS scope

//syntax -> ()() => first paranthesis for wrapping function and second for execution 

(function test(){
    console.log(`DB-CONNECTED`);
})();  // named IIFE

// ; -> tells IIFE to end the context 

(()=>{
    console.log(`DB-CONNECTED 2`);
})();

// passing parameters
((name)=>{
    console.log(`DB-CONNECTED ${name}`);
})("Akshat");
