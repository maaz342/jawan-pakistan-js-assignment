//ALL THE HTML AND CSS IMPLEMENTAIONS AND ID NAMES ARE SUPPOSED SO KINDLY IGNORE IT I HAVE DONE ONLY JS IMPLEMENTATION.
// 1. Create a simple event that prints a message when the user clicks on an element.


document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
});


// 2. Create an event that hides an element when the user clicks on a different element.

document.getElementById("hideButton").addEventListener("click", function () {
    document.getElementById("elementToHide").style.display = "none";
});
// 3. Create a link that changes color when the user hovers over it and then back to its original color when the user moves the mouse away.

var link = document.getElementById("colorChangeLink");

link.addEventListener("mouseover", function () {
    link.style.color = "red";
});

link.addEventListener("mouseout", function () {
    link.style.color = "blue";
});
// 4. Create an event that scrolls to the top of the page when the user clicks on a link.

document.getElementById("scrollTopLink").addEventListener("click", function() {
    window.scrollTo(0, 0);
  });
// 5. Create a link that plays a sound when the user clicks on it.

  var audio = document.getElementById("myAudio");

document.getElementById("playSoundLink").addEventListener("click", function() {
  audio.play();
});
// 6. Create a simple link that opens a new window when clicked.
document.getElementById("openWindowLink").addEventListener("click", function() {
    window.open("https://www.example.com", "_blank");
  });
// 7. Create a simple button that alerts a message when clicked.
  document.getElementById("alertButton").addEventListener("click", function() {
    alert("Button clicked!");
  });
// 8. Create a button that changes color when the user hovers over it.


  var button = document.getElementById("colorChangeButton");

button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "red";
});

button.addEventListener("mouseout", function() {
  button.style.backgroundColor = "blue";
});
// 9. Create a button that plays a sound when the user clicks on it.

var audio = document.getElementById("myAudio");
var playSoundButton = document.getElementById("playSoundButton");

playSoundButton.addEventListener("click", function() {
  audio.play();
});

// 10. Create an event that alerts a message when the user moves the mouse over an element.

var element = document.getElementById("mouseoverElement");

element.addEventListener("mouseover", function() {
  alert("Mouse over element!");
});

// 11. Create an event that hides an element when the user moves the mouse out of it.


var elementToHide = document.getElementById("hideOnMouseout");

elementToHide.addEventListener("mouseout", function() {
  elementToHide.style.display = "none";
});
// 12. Create a link that opens a new window when the user clicks on it and then closes the window when the user clicks on a close button in the new window. The size of the new window should be determined by the user's mouse position.
document.getElementById("openWindowWithCloseButton").addEventListener("click", function() {
    var width = window.screenX + window.innerWidth / 2;
    var height = window.screenY + window.innerHeight / 2;
    var newWindow = window.open("", "_blank", "width=300,height=200,top=" + height + ",left=" + width);
  
    var closeButton = document.createElement("button");
    closeButton.innerText = "Close Window";
    closeButton.addEventListener("click", function() {
      newWindow.close();
    });
  
    newWindow.document.body.appendChild(closeButton);
  });