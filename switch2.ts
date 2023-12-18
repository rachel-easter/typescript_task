function lcm(a: number, b: number): number | string {
  let result: number | string;

  switch (true) {
    case a === 0 || b === 0:
      result = "Undefined (One or both numbers are zero)";
      break;

    case a % b === 0:
      result = a;
      break;

    case b % a === 0:
      result = b;
      break;

    default:
      // Finding LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
      result = (a * b) / gcd(a, b);
  }

  return result;
}

// GCD function using Euclidean algorithm
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// Example usage:
const num1: number = 5;
const num2: number = 4;

const result: number | string = lcm(num1, num2);
console.log(`LCM of ${num1} and ${num2}: ${result}`);
