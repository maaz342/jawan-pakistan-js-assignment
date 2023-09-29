//1.	Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.
var i = 0;
while (i < 2) {
  i++;
}
//do-while loop:


var i = 0;
do {
  i++;
} while (i < 2);
//2.	Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter. Break out of the loop when it's found.
//var animals=["horse", "ox", "cow", "pig", "duck"];
var animals = ["horse", "ox", "cow", "pig", "duck"];
var i = 0;
while (i < animals.length) {
  if (animals[i] === "pig") {
    alert("Found it!");
    break;
  }
  i++;
}//do-while loop:

var animals = ["horse", "ox", "cow", "pig", "duck"];
var i = 0;
do {
  if (animals[i] === "pig") {
    alert("Found it!");
    break;
  }
  i++;
} while (i < animals.length);
//3.	Code to use a while & do while loop to print the numbers from 1 to 10.
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//do-while loop:
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
//4.	To use a while loop to ask the user for a number and then print that number back to them.
var userInput;
while (true) {
  userInput = prompt("Enter a number:");
  if (userInput === null) {
    break; 
  }
  console.log("You entered: " + userInput);
}
  //do-while

var userInput;
do {
  userInput = prompt("Enter a number:");
  if (userInput !== null) {
    console.log("You entered: " + userInput);
  }
} while (userInput !== null);
//5.	To use a while loop to check if a number is even or odd.
var number = parseInt(prompt("Enter a number:"));
while (!isNaN(number)) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
  number = parseInt(prompt("Enter another number (or a non-number to exit):"));
}
  //do-while

var number;
do {
  number = parseInt(prompt("Enter a number (or a non-number to exit):"));

  if (!isNaN(number)) {
    if (number % 2 === 0) {
      console.log(number + " is even.");
    } else {
      console.log(number + " is odd.");
    }
  }
} while (!isNaN(number));
//6.	Create a guessing game where the user has to guess a number between 1 and 100. 
var targetNumber = Math.floor(Math.random() * 100) + 1;
var guess;
var attempts = 0;

do {
  guess = parseInt(prompt("Guess the number (between 1 and 100):"));
  attempts++;

  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < targetNumber) {
    alert("Too low! Try again.");
  } else if (guess > targetNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You guessed the number in " + attempts + " attempts.");
  }
} while (guess !== targetNumber);
//7.	 Use a while & do-while loop to create a countdown timer?
var count = 10;

while (count >= 0) {
  console.log("Countdown: " + count);
  count--;
}
//do-while
var count = 10;

do {
  console.log("Countdown: " + count);
  count--;
} while (count >= 0);
