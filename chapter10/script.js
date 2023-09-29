//1.	var city = "Karachi"
//if (city = "Karachi") {
//console.log("The City OF Lights")
//Correct the above statement:
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City of Lights");
}


//2.	This is the first line of an if statement:
//if (x === y) {
//Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.
if (x === y) {
    var z = prompt("Enter the value of z?");
  }
  
//3.	Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")
var ZipCode = "10010";
if (ZipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write the correct city");
}

//4.	Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;
var x = 5; 
if (x === 5) {
  x = 1; 
}
