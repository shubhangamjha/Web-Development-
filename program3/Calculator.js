let display = document.getElementById("display");
let currentValue = "";
let memory = "";
let operator = "";

function addValue(button)
{
  if (button.value === "C")
  {
    currentValue = "";
    memory = "";
    operator = "";

  }

  else if (button.value === "+" || button.value === "-" || button.value === "*" || button.value === "/")
  {
    memory = currentValue;
    currentValue = "";
    operator = button.value;
  }
  else
  {
    currentValue += button.value;
  }
  display.value = currentValue;
}
display.value = currentValue;

function calculate()
{
  if (operator === "+")
  {
    currentValue = parseFloat(memory) + parseFloat(currentValue);
  }
  else if (operator === "-")
  {
    currentValue = parseFloat(memory) - parseFloat(currentValue);
  }
  else if (operator === "*")
  {
    currentValue = parseFloat(memory) * parseFloat(currentValue);
  }
  else
  {
    currentValue = parseFloat(memory) / parseFloat(currentValue);
  }
  display.value = currentValue;
}


