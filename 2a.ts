//Calculate total marks and update the status student is pass/Fail and publish their grades:
import * as readline from 'readline-sync'

function status(tmark:number):void{
    if(tmark>=260){
   if(tmark===300){
    console.log(" Grade is O");
   }
   else if(tmark<=280){
         console.log("Grade is A");
   }
}
   else{
      console.log("Failed");
   }
}
function calculation(...marks:number[]):void{
let total=0;
marks.forEach((ele)=>total+=ele);
status(total);
}

let eng:number=parseInt(readline.question('Enter the english mark:'));
let math:number=parseInt(readline.question("Enter the maths Mark:"));
let sci:number=parseInt(readline.question("Enter the science mark:"));

calculation(eng,math,sci);//used rest parameter
