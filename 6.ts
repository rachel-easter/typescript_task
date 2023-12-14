/* Write a function that takes an array of integers and 
returns the maximum difference between any two 
numbers in the array where the larger element appears after the 
smaller element*/
import * as readline from 'readline-sync'
let arr:number[]=readline.question("Enter the element in the array: ").split(' ').map(Number);
arr.sort();
let res:number=arr[arr.length-1]-arr[0];
console.log(res);
