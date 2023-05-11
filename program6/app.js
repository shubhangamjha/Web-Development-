// Get the button element
var btn = document.getElementById("myBtn");

// Add an event listener to the button
btn.addEventListener("click", function(){
  // Get the header element
  var header = document.getElementById("header");

  // Change the text of the header
  header.innerHTML = "Button was clicked!";

  // Change the background color of the window
  window.document.body.style.backgroundColor = "lightblue";
});
