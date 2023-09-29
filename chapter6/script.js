//1.	Code a short form of x = x + 1; Use either of the two legal expressions.
x += 1; 
x++
//2.	If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
x--;
//3.	var x = 50;
//var y = x++;
//What is the value of y?
//The value of y will be 50.


//x is initially assigned the value 50.
//Then, the value of x is assigned to y, which makes y also equal to 50.
//After that assignment, the x variable is incremented by 1, so x becomes 51. However, this increment operation doesn't affect the value of y, which was already assigned before the increment.
//4.var y = 50;
//var z = --y;
//What is the value of z?
//The value of z will be 49.
//In the statement var z = --y;, --y first decrements y by 1 and then assigns the decremented value to z.
//5.	In a single statement, decrement num and assign its original value to newNum.

var num=40;
var newNum = num--;
//6.	In a single statement add 1 to a variable and assign its original value to another variable.

var originalVar = 5;
var secondVar = originalVar++;
//7.	 Assign a number value to a variable. Increment the variable.Display the new value in an alert
var myNumber = 10; 
myNumber++; 
alert("The new value is: " + myNumber); 
