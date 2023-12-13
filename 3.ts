//Calculate total marks and percentage.

//for a student 
import * as readline from 'readline-sync'
let arr:number[]=readline.question("Enter the marks:").split(' ').map(Number);
var fullMark:number=300;
t(arr);

function t(arr:number[]):void{
let total:number=0;
arr.forEach((ele:number)=>total+=ele);
p(total);
}
function p(total:number):void{
let per:number=(total/fullMark)*100;
console.log(`${per.toFixed(2)}%`);
}
