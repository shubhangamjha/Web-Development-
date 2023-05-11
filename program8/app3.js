// Get the element to insert the numbers into
var numbersList = document.getElementById("numbers");

// Use a for loop to iterate through the numbers 1 to 10
for (var i = 1; i <= 10; i++)
{
  // Create a new list item element
  var newListItem = document.createElement("li");

  // Set the text content of the element to the current number
  newListItem.textContent = i;

  // Append the element to the numbers list
  numbersList.appendChild(newListItem);
}
