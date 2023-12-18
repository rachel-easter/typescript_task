const s: string = prompt("Enter the string:"); // input from the user

function firstCap(s: string): string {
  return s
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const capital: string = firstCap(s);
console.log(capital);
