// Questions 1
//Create an array named fruits that contains the following string
//elements: "apple", "banana", "mango", "orange".


const fruits: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruits)
// remove the last element from the fruits array,
fruits.pop();

const fruits1: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruits)
//  add a new element "grapes" to the end of the fruits1 array,
fruits1.push('grapes')

const fruits2: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruits2)
// add a new element "cherry" to the beginning of the fruits2 array.
fruits.unshift('cherry')
console.log('cherey got add:)', fruits )

//remove the first element from the fruits2 array,
let fruits3:string[]= ["apple", "banana", "mango", "orange"];
console.log(fruits3)
fruits2.shift();