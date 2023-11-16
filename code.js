function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }
  
  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  // Number is prime if it passes the above conditions
  return true;
}

// Prompt the user to enter a number
const userInput = prompt('Enter a number:');

// Parse the user input as an integer
const number = parseInt(userInput);

// Check if the number is prime
if (isPrime(number)) {
  console.log(number + ' is prime.');
} else {
  console.log(number + ' is not prime.var a = 2;
var b = -5;
// Solve the equation for xvar x = -b / a;
// Output the solutionconsole.log("Solution: x =", x);