const s: string = prompt("Enter the string:"); // Input from the user (String)
const words: string[] = s.split(' '); // Split the string with the delimiter space

const lengths: number[] = []; // Creating an array (empty)
for (const word of words) {
  const length: number = word.length;
  lengths.push(length);
}

const maxLength: number = Math.max(...lengths);

for (const word of words) {
  if (word.length === maxLength) {
    console.log(word);
    break;
  }
}
