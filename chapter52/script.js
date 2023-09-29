//ALL THE HTML AND CSS IMPLEMENTAIONS AND ID NAMES ARE SUPPOSED SO KINDLY IGNORE IT I HAVE DONE ONLY JS IMPLEMENTATION.

//1.	When the user clicks on the sentence, it turns bold.

document.getElementById("boldParagraph").addEventListener("click", function() {
    this.style.fontWeight = "bold";
  });
//2.	How can I make an image disappear when the user hovers over it and show text instead? When the user hovers off the image, the original image should reappear.
  var imageContainer = document.getElementById("imageContainer");
var textOverlay = document.getElementById("textOverlay");

imageContainer.addEventListener("mouseover", function() {
  document.getElementById("image").style.display = "none";
  textOverlay.style.display = "block";
});

imageContainer.addEventListener("mouseout", function() {
  document.getElementById("image").style.display = "block";
  textOverlay.style.display = "none";
});

3//.	When the user mouses over the heading, its background turns black, but it retains its original light gray color
var heading = document.getElementById("heading");

heading.addEventListener("mouseover", function() {
  this.style.backgroundColor = "black";
});

heading.addEventListener("mouseout", function() {
  this.style.backgroundColor = "lightgray";
});

//4.	When user hover to a paragraph, Add a underline style to text
var hoverParagraph = document.getElementById("hoverParagraph");

hoverParagraph.addEventListener("mouseover", function() {
  this.style.textDecoration = "underline";
});

hoverParagraph.addEventListener("mouseout", function() {
  this.style.textDecoration = "none";
});
//5.Swap the images when the user clicks on a button.
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var swapButton = document.getElementById("swapButton");

swapButton.addEventListener("click", function() {
  var currentSrc = image1.src;

  image1.src = image2.src;
  image2.src = currentSrc;
});