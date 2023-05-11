function generateNumber() {
  var output = document.getElementById("output");
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  output.innerHTML = "Random number: " + randomNumber;
}
