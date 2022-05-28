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

const country = new Object();
country.name = "Kenya";
country.continent = "Africa";
country.population = "52m";

document.getElementById("country").innerHTML = country.name + " is a small country in " 
+ country.continent + " with a population of " + country.population;