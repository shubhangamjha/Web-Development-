// Initialize an empty array to store the list items
let items = [];

// Get the add button
let addBtn = document.getElementById("addBtn");

// Add click event listener to the add button
addBtn.addEventListener("click", addItem);

// Function to add a new item to the list
function addItem() {
  // Get the value of the input field
  let item = document.getElementById("item").value;

  // Add the item to the array
  items.push(item);

  // Clear the input field
  document.getElementById("item").value = "";

  // Call the function to display the list
  displayList();
}

// Function to display the list
function displayList() {
  // Get the list element
  let list = document.getElementById("list");

  // Clear the list
  list.innerHTML = "";

  // Loop through the array and add each item to the list
  for (let i = 0; i < items.length; i++) {
    // Create a new list item
    let li = document.createElement("li");

    // Add the item text
    li.innerHTML = items[i];

    // Create a delete button
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.onclick = function() {
      deleteItem(i);
    };

    // Append the button to the list item
    li.appendChild(btn);

    // Append the list item to the list
    list.appendChild(li);
  }
}

// Function to delete an item from the list
function deleteItem(index) {
  // Remove the item from the array
  items.splice(index, 1);

  // Call the function to display the list
  displayList();
}

// Call the function to display the list
displayList();
