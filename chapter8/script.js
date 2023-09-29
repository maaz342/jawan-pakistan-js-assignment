//1.	var num = "2" + "2";
//What is the value of num? Include quotation marks.
//The value of num is the string "22" (include quotation marks) because when you use the + operator with two strings, it performs string concatenation rather than numeric addition.
//2.	message = ("Hello," + "Dolly");
//What is the value of message? (Include the quotation marks.)*/
//Alert the statement
//The value of message is the string "Hello, Dolly" (include the quotation marks). To alert the statement:

alert(message);
//3.	alert("33" + 3);
//What message displays in the alert box?
//The message displayed in the alert box will be "333" because when you use the + operator with a string and a number, JavaScript converts the number to a string and performs string concatenation.
//4.	Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
var part1 = "Pakistan";
var part2 = "Zindabad";
var result = part1 + " " + part2;
alert(result);
//5.	Write a statement that assigns to a variable the concatenation of a string with a number
var stringVar = "The number is: ";
var numberVar = 42;
var result = stringVar + numberVar;
//6.	Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var string1 = "Hello, ";
var string2 = "world!";
var concatenatedString = string1 + string2;