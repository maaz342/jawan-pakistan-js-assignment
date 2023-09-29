//1.	Type the characters that are missing from this code.var allLower = userInput.toLowerCase;Note: Correct this statement by yourself.
var allLower = userInput.toLowerCase();

//2.	Convert the string represented by x to lower-case and assign the result to the same variable.
x = x.toLowerCase();

//3.	Convert the string represented by y to upper-case and assign the result to the same variable.
y = y.toUpperCase();

//4.	Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
var originalString = "Hello World"; 
var lowerCaseString = originalString.toLowerCase(); 
//5.	Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
var myArray = ["Apple", "Banana", "Cherry"];
var lowerCaseElement = myArray[0].toLowerCase(); 
//6.	Display in an alert the upper-case version of the string represented by a variable.
var myString = "Hello World";
var upperCaseString = myString.toUpperCase();
alert(upperCaseString);
//7.	var cityName = “kaRacHi”;
//Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
