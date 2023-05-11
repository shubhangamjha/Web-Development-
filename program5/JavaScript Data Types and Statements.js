// Declare variables of different data types
let name = "John Doe";
let age = 30;
const isStudent = true;
let grades = [90, 85, 80];

// Use if-else statement to check a condition
if (isStudent) {
  console.log("Welcome, student!");
} else {
  console.log("Sorry, you are not a student.");
}

// Use a for loop to iterate through an array
for (let i = 0; i < grades.length; i++) {
  console.log("Grade: " + grades[i]);
}

// Use the typeof operator to check the data type of a variable
console.log("Type of name: " + typeof name);

// Use the ternary operator to check if age is greater than 18
let ageCheck = age > 18 ? 'Adult' : 'Minor';
console.log("Age Check: " + ageCheck);

// Use a while loop to print even numbers between 1 and 10
let num = 1;
while(num <= 10) {
    if(num % 2 === 0) {
        console.log(num);
    }
    num++;
}

// Use the switch statement to check a variable value
let day = new Date().getDay();
switch(day) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    // add more cases for the remaining days
    default:
        console.log("Invalid Day");
}
