//ALL THE HTML AND CSS IMPLEMENTAIONS AND ID NAMES ARE SUPPOSED SO KINDLY IGNORE IT I HAVE DONE ONLY JS IMPLEMENTATION.

// 1. Read the value of a user input and print it to the console.
const userInput = document.getElementById('userInput').value;
console.log(userInput);

// 2. Read the value of a checkbox and print it to the console.
const checkbox = document.getElementById('checkboxId');
console.log(checkbox.checked);

// 3. Read the value of a select box and print it to the console.
const selectBox = document.getElementById('selectBoxId');
const selectedOption = selectBox.options[selectBox.selectedIndex].value;
console.log(selectedOption);

// 4. Place some text in a field. Make up an id for the field.
document.getElementById('customFieldId').textContent = 'Text to place in the field';

// 5. Ask the user about marital status. If the variable "married" is false, place the value "available" in the field with the id "status".
const married = false;
if (!married) {
  document.getElementById('status').value = 'available';
}

// 6. If an input is empty, fill it with a string.
const inputElement = document.getElementById('inputFieldId');
if (inputElement.value === '') {
  inputElement.value = 'Default Value';
}
// 7. Create a registration form with validation.

document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const errorMessages = document.getElementById("errorMessages");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Reset error messages
        errorMessages.innerHTML = "";

        // Get form inputs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simple validation
        if (name === "") {
            showError("Name is required.");
        }

        if (email === "") {
            showError("Email is required.");
        } else if (!isValidEmail(email)) {
            showError("Invalid email address.");
        }

        if (password === "") {
            showError("Password is required.");
        } else if (password.length < 6) {
            showError("Password must be at least 6 characters long.");
        }

        // If there are no errors, submit the form (you can add AJAX for real submission)
        if (errorMessages.innerHTML === "") {
            alert("Registration successful!");
            registrationForm.reset();
        }
    });

    function showError(message) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorMessages.appendChild(errorMessage);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
