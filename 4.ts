//Write a function that takes an array of numbers and returns a new array with only the unique numbers (removing duplicates)
//removing duplicates:

import * as readline from 'readline-sync'

let arr:number[]=readline.question("Enter the element in array: ").split(' ').map(Number);

let newArray:number[]=[];

for(let ele of arr ){
    if(!(newArray.includes(ele))){
        newArray.push(ele);
    }
} 

console.log(newArray);

