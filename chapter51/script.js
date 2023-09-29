//ALL THE HTML AND CSS IMPLEMENTAIONS AND ID NAMES ARE SUPPOSED SO KINDLY IGNORE IT I HAVE DONE ONLY JS IMPLEMENTATION.

//1.	How can I create a paragraph that expands when the user clicks on a Show More?
function expandText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var button = document.querySelector("button");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        button.textContent = "Show More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        button.textContent = "Show Less";
        moreText.style.display = "inline";
    }
}
//2.	Read the text of a paragraph and use it to search for a specific word or phrase.
var paragraphText = document.getElementById("paragraph").textContent;
var words = paragraphText.split(" ");
var longestWord = "";

for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log("The longest word in the paragraph is: " + longestWord);

//3.	Read the text of a paragraph and use it to find the longest word.
function findLongestWord() {
    var paragraphText = document.getElementById("paragraph").textContent;
    var words = paragraphText.split(/\s+/);

    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i].replace(/[.,!?;:]/g, '');
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    document.getElementById("longestWord").textContent = "Longest Word: " + longestWord;
}

//4.	Set the text of a paragraph to the value of a text field, but only if the value is not empty.
function updateParagraph() {
    var textFieldValue = document.getElementById("textField").value;
    var updatedParagraph = document.getElementById("updatedParagraph");

    if (textFieldValue !== "") {
        updatedParagraph.textContent = textFieldValue;
    }
}
//5.	Set the text of a paragraph to the value of a text field, but only if the value is equal to a specific word or phrase.
function updateParagraph() {
    var textFieldValue = document.getElementById("textField").value;
    var updatedParagraph = document.getElementById("updatedParagraph");
    var specificWord = "example"; // Replace with your specific word or phrase

    if (textFieldValue === specificWord) {
        updatedParagraph.textContent = textFieldValue;
    }
}
//6.	Set the text of a paragraph to the value of a text field, but only if the value is less than a certain length.
function updateParagraph() {
    var textFieldValue = document.getElementById("textField").value;
    var updatedParagraph = document.getElementById("updatedParagraph");
    var maxLength = 50; // Replace with your desired maximum length

    if (textFieldValue.length < maxLength) {
        updatedParagraph.textContent = textFieldValue;
    }
}