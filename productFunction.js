// calculating area 
const prompt = require('prompt-sync')();

let x = prompt("Enter breadth: ");
let y = prompt("Enter length: ");
let length = parseInt(y);
let breadth = parseInt(x);

function totalarea(length, breadth) {
    let answer = length * breadth;
    return answer;
}
console.log("Total area is: " + totalarea (length,breadth));