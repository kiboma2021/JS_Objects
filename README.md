# JS_Objects
JAVASCRIPT OBJECTS

In JavaScript, almost "everything" is an object.
  1. Booleans can be objects (if defined with the new keyword)
  2. Numbers can be objects (if defined with the new keyword)
  3. Strings can be objects (if defined with the new keyword)
  4. Dates are always objects
  5. Maths are always objects
  6. Regular expressions are always objects
  7. Arrays are always objects
  8. Functions are always objects
  9. Objects are always objects

Objects are always variables

A javascript object is a collection of named values.


## Creating a JavaScript Object

There are different ways to create new objects:

1. Create a single object, using an object literal.  
2. Create a single object, with the keyword new.
3. Define an object constructor, and then create objects of the constructed type.
4. Create an object using Object.create().

## Using an Object Literal
An object literal is a list of name:value pairs inside curly braces {}.

e.g const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

## Using the JavaScript Keyword new
const person = new Object();

  person.firstName = "John";

  person.lastName = "Doe";

  person.age = 50;
  
  person.eyeColor = "blue";


## JavaScript Object Constructors
function Person (name,surname,age,city) {

  this.firstname = name;

  this.surname = surname;

  this.age = age;

  this.town = city;

}

## Authors

👤 **Ben Omayio**

- GitHub: [@kiboma2021](https://github.com/kiboma2021)
- Twitter: [@BenOmayio](https://twitter.com/omayiobenj)
- LinkedIn: [@BenOmayio](https://www.linkedin.com/in/ben-omayio-74622469/)

## Show your support

Give a ⭐️ if you like this project!

