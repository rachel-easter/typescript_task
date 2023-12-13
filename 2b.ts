//Create a function that takes an integer as an argument and returns 'even' if number is even 
//and 'odd ' if it is odd

//user input:node.js terminal
import * as readline from 'readline-sync'

let a:number=parseInt(readline.question("Enter the number"));
if(a%2===0){
    console.log("the given number is even");
}
else{
    console.log("the given number is odd");
    }
