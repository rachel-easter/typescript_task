const s: string = prompt("Enter the username:"); // Input the username
const reg: RegExp = /[a-zA-Z0-9_]{4,16}$/; // Regular expression

function check(username: string): boolean {
  return reg.test(username); // Check
}

const result: boolean = check(s);
console.log(result); // Output in the console (true or false)
