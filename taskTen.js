let secretNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

while (guess != secretNumber) {

  guess = Number(prompt("Guess a number between 1 and 100:"));

  attempts = attempts + 1;

  if (guess < secretNumber) {

    console.log("Too low! Try again.");

  }

  else if (guess > secretNumber) {

    console.log("Too high! Try again.");

  }

  else {

    console.log("Congratulations! You guessed correctly.");

  }
}

console.log("The correct number was: " + secretNumber);
console.log("Total attempts: " + attempts);

