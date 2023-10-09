/*
    -> Javascript 
            -> Synchronous
            -> Single-Threaded
        (These are default JS behaviour)

    -> Execution Context 
            -> execute one line of code at a time
            
            -> console.log 1
            -> console.log 2     
                                    * Each operation waits for the last one to 
                                      to complete before executing 
            Call Stack   Mem. Heap


    -> Blocking Code  Vs.  Non-Blocking Code

        BC -> Block flow of the program -> Read file sync 
        NBC -> Does not block execution -> Read file async

        NBC issue ->  when registering a user and his/her data needs to be stored then give message registration 
                      successfull. With NBC we will deliver the success msg before data gets stored in DB 
*/