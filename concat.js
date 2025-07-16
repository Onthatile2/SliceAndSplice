//concatenate is a method we usse to combine or join two or more arrays into one.


let intro = ["HTML", "CSS", "JS"]
let basics = ["Problem solving", "coding", "GIT"]
let fundamentals = ["Algorithms", "functions", "Logics"]
let cs= intro.concat(basics, fundamentals)
console.log(cs)

//flat method we use it to reduce meetings inside an array. also called to flatten the array
let courses = [["HTML", "CSS", "GIT"], ["Problem solving", "Coding", "GIT"]
["Algorithms", "Functions", "Logics"]
]

let subjects = courses.flat(Infinity)
console.log(subjects)
