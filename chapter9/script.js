

// 1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
var firstName = prompt("Enter first name");

// 2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
var country = prompt("Country?", "China");

//3.	Correct this statementvar yourName = prompt(Enter Your Name");
var yourName = prompt("Enter Your Name");

// 4. Code a prompt that specifies a string as the message and includes a default input.
var userResponse = prompt("Please enter something", "Default Input");

// 5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.
var promptMessage = "Enter a message:";
var defaultResponse = "Hello, World!";
var userResponse = prompt(promptMessage, defaultResponse);

// 6. Display a prompt, including both a message and a default response. Display the user's response in an alert.
var message = "Enter your comment:";
var defaultComment = "I like this!";
var userComment = prompt(message, defaultComment);

if (userComment !== null) { 
  alert("You entered: " + userComment);
} else {
  alert("You canceled the prompt.");
}