// Destructuring an Object 

const course = {
    coursename : "javascript",
    price : "1000",
    courseInstructor : "hitesh",
}

console.log(course.courseInstructor); // we need to write course.courseInstructor each time we want to access it

// alter way => destructuring an object

const {courseInstructor : Instructor} = course
console.log(Instructor) // hitesh

//JSON 
// {
//     "name":"akshat",
//     "age":28,
//     "email":"gmail.com",
// }