// 1. Code an if statement that tests whether one variable is greater than or equal to another variable. 
// If so, display an alert. If not, display a different alert.

var variable1 = 5;
var variable2 = 3;

if (variable1 >= variable2) {
    alert("Variable1 is greater than or equal to Variable2");
} else {
    alert("Variable1 is not greater than or equal to Variable2");
}

//  2. Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET)
var marks = parseInt(prompt("Enter your marks:")); 

if (marks >= 90) {
    alert("Your grade is A");
} else if (marks >= 70) {
    alert("Your grade is B");
} else if (marks >= 50) {
    alert("Your grade is C");
} else {
    alert("Your grade is F");
}

// 3. .	This is the if statement that begins the code.
//if (a === 10) {
  //  alert("a is 10");
 // }
  //If a isn't 10, display an alert that says The correct value of a is ____

if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}

// 4. Prompt the user to enter a city.If the city is Karachi, display an alert acknowledging it is Karachi.If not, check to see if it's Lahore.If it is, display an alert acknowledging it's Lahore.Otherwise, display a different alert.var city = prompt("Enter a city:");

if (city === "Karachi") {
    alert("Acknowledging it is Karachi.");
} else if (city === "Lahore") {
    alert("Acknowledging it's Lahore.");
} else {
    alert("This city is not recognized.");
}
