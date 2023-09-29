//1.	How do you convert a string to an integer in JavaScript?
//To convert a string to an integer in JavaScript, you can use the parseInt() function.
//2.	Write a JavaScript function to convert the string "123" to an integer.
function stringToInteger(str) {
    return parseInt(str);
  }
  
  var result = stringToInteger("123"); 
  
//3.	How can you convert a string containing a decimal number to a floating-point number in JavaScript?

//To convert a string containing a decimal number to a floating-point number in JavaScript, you can use the parseFloat() function.
//4.	How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

  function canBeConvertedToNumber(str) {
    var num = parseFloat(str);
    return !isNaN(num);
  }
  
  var isConvertible = canBeConvertedToNumber("3.14"); 
  var isNotConvertible = canBeConvertedToNumber("abc"); 
  
//5.	How can you convert a number to a string in JavaScript?
//To convert a number to a string in JavaScript, you can use the .toString()
//6.	Write a JavaScript function to convert the number 42 to a string.
function numberToString(num) {
    return num.toString();
  }
  
  var result = numberToString(42); 
//7.	Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?
var str = "3.14";
var num = parseInt(str); 
