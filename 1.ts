//Datatypes:
//declare 2 variable x and y :
//without using third variable:
import * as readlineSync from 'readline-sync'
function withoutThird(a:number,b:number):void{

    a=a+b;
    b=a-b;
    a=a-b;

    console.log("After swapping");
    console.log(`num1 ${a} and num2  ${b}`);



}

console.log("Before swapping");
let a:number=parseInt(readlineSync.question("num1: "));
let b:number=parseInt(readlineSync.question("num2: "));

withoutThird(a,b);

