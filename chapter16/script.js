

//1.	Code an array with 1 string element.
//Add an additional element to the array using push.
//Create an alert whose message is the last element.

var myArray = ["Hello"];
myArray.push("World"); 
var lastElement = myArray[myArray.length - 1]; 
alert("Last element in the array: " + lastElement); 
//2.	var Alphabet=["h","i","j","k"]
//Remove the last element from the array Alphabet.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); // Remove the last element

//3.	var Alphabet=["h","i","j","k"]
//Add a new element, a number, to the end of an array
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(42); 
//ARRAYIII
//1.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].\Remove the first element of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
//2.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].Add three number elements to the beginning of an array.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
//3.	Declare an array with one element.Add a second element to the beginning of the array.Create an alert whose message is the new first element.
var myArray = ["FirstElement"];
myArray.unshift("NewFirstElement"); // Add a new element to the beginning
alert("New first element: " + myArray[0]); 
//4.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].Insert "L" into the array between "M" and "XL".
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
//5.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].Copy the first 3 sizes of the array and put them into a new array, regSizes.
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); 
//6.	var pets = ["dog", "cat", "ox", "duck", "frog"].Add 2 elements after "dog" and remove "cat", "ox", and "duck".
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); 
//7.	var pets = ["dog", "cat", "ox", "duck", "frog"];Remove "cat" and "ox".
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); 
//8.	var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];Reduce it to "duck" and "frog" using slice.
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); 

