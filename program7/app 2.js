// object creation
let person = {
  name: "John",
  age: 30,
  occupation: "Developer"
};

// adding methods to the object
person.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

person.showAge = function() {
    console.log("I am " + this.age + " years old.");
};

// calling the methods
person.sayHello();
person.showAge();
