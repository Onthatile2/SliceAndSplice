let courses = ["Html", "Css", "Javascript", "React"]

//push method add an element at the end of the array 
courses.push("Typescript"); 

//unshift add elemnt at the beginning of the array
courses.unshift("nodejs");

let total = courses.length; 

//we creating a list of strings with variable convertor 
let convertor = courses.toString(); // convertor is a list, courses is an object 


// all this methods become available from string library
let caps = convertor.toUpperCase();

let smalls = convertor.toLowerCase();


let separator = courses.join(`|`); // using join method to separate elements with "|"
console.log(`separated elements ${separator}`)

console.log(`Elements inside array courses are ${courses} `)
console.log(`Number of items in an array is ${total} `)
console.log(`This array becomes a list of strings ${convertor}`)
console.log(`Testing if string can call uppercase ${caps}`) 
console.log(`Testing if string can call smaller case ${smalls}`)

let student= {
    firstName: "Thati",
    secondName: "Nthutang",
    stipend: 6000,
}

console.log(delete student.stipend)// the value will return true if it waasa able to delete or false if it wasn't  
console.log(student);
console.log(student.firstName, student.secondName)

