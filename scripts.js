//construct object using Object Literal
const person = {
  firstName: "Ben",
  secondName: "Kiboma",
  age: 27,
  city: "Nairobi"
}

document.getElementById("data1").innerHTML= 
"My name is "+ person.firstName + " " + 
  person.secondName + ", and I am " + person.age + " Years old. I live in" + 
  person.city;

  //construct object Using the JavaScript Keyword new
const country = new Object();
country.name = "Kenya";
country.continent = "Africa";
country.population = "52m";

document.getElementById("country").innerHTML = country.name + " is a small country in " 
+ country.continent + " with a population of " + country.population;

// Constructor function for Person objects

function Person (name,surname,age,city) {
  this.firstname = name;
  this.surname = surname;
  this.age = age;
  this.town = city;
}

//Create a person object
const President1 = new Person ("Raila","Odinga",74,"Kisumu");
const President2 = new Person ("Samwuel","Ruto",52,"Eldoret");

document.getElementById("president").innerHTML = "The two major candidates are " + President1.firstname + " " + President1.surname +
" and " + President2.firstname + " " +President2.surname

President1.education = "Degree";
President2.education = "PHD"

document.getElementById("president1").innerHTML = "The presidents age are " + President1.age +" and level of education is " + President1.education

//To add a new method to an existing object
President1.fullname = function () {
  return this.firstname + " " + this.surname;
};

document.getElementById("full-name").innerHTML = President1.fullname();

//Adding a Method to a Constructor
function Governers (name,surname,age,city) {
  this.firstname = name;
  this.surname = surname;
  this.age = age;
  this.town = city;
  this.fullname = function () {
    return this.firstname + " " + this.surname;
  }
};

const Gov1 = new Governers ("Johnstone", "Sakaja", 41, "Webuye");

document.getElementById("full-name2").innerHTML = Gov1.fullname();