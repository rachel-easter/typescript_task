/*write a function to search for a department by its 
department id/department name,if department exists to 
return list of student*/
import*as readline from 'readline-sync'
type Depa={
    id:number,
    name:string,
    student:string[];
};

const detail:Depa[]=[
    {
    id:1,
    name:"Maths",
    student:["Rachel","Rani"]
    },
    {
        id:2,
        name:"English",
        student:["Wiliam","John"],
    },
    {
       id:3,
       name:"Science",
       student:["Abraharam"], 
    }
];
var found:boolean=false;
var InputId:number=parseInt(readline.question("Enter the department id: "));
for(let j=0;j< detail.length;j++){
if(InputId===detail[j].id){
    found=true;
for(let i=0;i<detail[j].student.length;i++){
    console.log(detail[j].student[i]);
}
}
break;
}
if(found===false){
    console.log("No such department-id present");
}




